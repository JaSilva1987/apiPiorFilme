import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { GRAController } from "./gra.controller";
import { GRAService } from "./gra.service";

@Module({
  providers: [GRAService],
  controllers: [GRAController],
})
export class GRAModule {}
