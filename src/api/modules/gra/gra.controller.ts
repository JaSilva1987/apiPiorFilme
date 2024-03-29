import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GRAService } from "./gra.service";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { GRAFilmesDTO } from "./dto/gra.dto";
import { ProducerInterval } from "src/api/interfaces/gra.interface";
import { HttpExceptionDto } from "../../filters/http-exception.dto";

@ApiTags("Golden Raspberry Awards")
@Controller("GoldenRaspberryAwards")
export class GRAController {
  constructor(private graService: GRAService) {}

  @Get()
  @ApiOperation({ summary: "Busca filmes" })
  @ApiResponse({ status: 200, isArray: true })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  getAll(): Promise<GRAFilmesEntity[]> {
    return this.graService.findAll();
  }

  @Get('producer-intervals')
  @ApiOperation({ summary: "Lista Produção que Ganharam o premio" })
  @ApiResponse({ status: 200, isArray: true })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  async getProducerIntervals(): Promise<{ min: ProducerInterval[]; max: ProducerInterval[] }> {
    return this.graService.findProducerIntervals();
  }

  @Post()
  @ApiOperation({ summary: "Grava filmes" })
  @ApiBody({ required: true, type: GRAFilmesDTO })
  @ApiResponse({ status: 200, type: GRAFilmesDTO })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  async postRanking(@Body() filme: GRAFilmesDTO): Promise<GRAFilmesEntity> {
    return this.graService.create(filme);
  }

  @Post(':filePath')
  @ApiOperation({ summary: "Importa filmes de arquivo CSV" })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  @ApiParam({
    name: 'filePath',
    description: 'Caminho do arquivo CSV a ser importado',
    example: '/Users/josesilva/Documents/Projetos/apiPiorFilme/src/database/arquivoImportacao/arquivo.csv',
  })
  async importarCSV(@Param("filePath") filePath: string): Promise<String> {
    try {
      const dadosCSV = await this.graService.impFilesCSV(filePath);
      return `Importado ${dadosCSV.length} linhas do arquivo solicitado`;
    } catch (error) {
      console.error('Erro ao ler o arquivo CSV:', error);
      throw new Error('Erro ao ler o arquivo CSV.');
    }
  }
}
