import { ApiProperty } from "@nestjs/swagger";

export class GRAFilmesDTO {
  @ApiProperty({ description: "Código indentificador", type: Number })
  id?: number;

  @ApiProperty({ description: "Ano de Lançamento", type: String })
  year: string;

  @ApiProperty({ description: "Título do Filme", type: String })
  title: string;

  @ApiProperty({ description: "Estudio", type: String })
  studios: string;

  @ApiProperty({ description: "Produtores", type: String })
  producers: string;

  @ApiProperty({ description: "Vencedor", type: String })
  winner: string;
}
