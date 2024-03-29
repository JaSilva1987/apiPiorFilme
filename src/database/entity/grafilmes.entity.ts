import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("filmes")
export class GRAFilmesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: "year" })
  year: string;

  @Column({ name: "title" })
  title: string;

  @Column({ name: "studios" })
  studios: string;

  @Column({ name: "producers" })
  producers: string;

  @Column({ name: "winner" })
  winner: string;
}
