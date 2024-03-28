import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("filmes")
export class GRAFilmesEntity {
  @PrimaryGeneratedColumn()
  ID?: number;

  @Column({ name: "year" })
  YEAR: string;

  @Column({ name: "title" })
  TITLE: string;

  @Column({ name: "studios" })
  STUDIOS: string;

  @Column({ name: "producers" })
  PRODUCERS: string;

  @Column({ name: "winner" })
  WINNER: boolean;
}
