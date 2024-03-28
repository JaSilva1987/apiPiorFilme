import { ApiProperty } from "@nestjs/swagger";

export class GRAFilmesDTO {
  @ApiProperty({ description: "Código indentificador", type: Number })
  ID?: number;

  @ApiProperty({ description: "Ano de Lançamento", type: String })
  YEAR: string;

  @ApiProperty({ description: "Título do Filme", type: String })
  TITLE: string;

  @ApiProperty({ description: "Estudio", type: String })
  STUDIOS: string;

  @ApiProperty({ description: "Produtores", type: String })
  PRODUCERS: string;

  @ApiProperty({ description: "Vencedor", type: Boolean })
  WINNER: boolean;
}
