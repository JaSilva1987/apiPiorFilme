import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GRAService } from "./gra.service";
import { HttpExceptionDto } from "src/api/filters/http-exception.dto";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { GRAFilmesDTO } from "./dto/gra.dto";

@ApiTags("Golden Raspberry Awards.")
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

  @Post()
  @ApiOperation({ summary: "Grava filmes" })
  @ApiBody({ required: true, type: GRAFilmesDTO })
  @ApiResponse({ status: 200, type: GRAFilmesDTO })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  async postRanking(@Body() filme: GRAFilmesDTO): Promise<GRAFilmesEntity> {
    return this.graService.create(filme);
  }
}
