import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GRAService } from "./gra.service";

@ApiTags("Golden Raspberry Awards.")
@Controller("GoldenRaspberryAwards")
export class GRAController {
  constructor(private graService: GRAService) {}

  @Get()
  @ApiOperation({ summary: "Retorna filmes armazenados" })
  @ApiResponse({ status: 200, isArray: true })
  getAll() {
    return this.graService.findAll();
  }
}
