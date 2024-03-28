import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { GRAModule } from "./modules/gra/gra.module";

@Module({
  controllers: [],
  providers: [],
  imports: [GRAModule],
})

export class ApiModule {}
