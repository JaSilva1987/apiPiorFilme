import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { GRAModule } from "./modules/gra/gra.module";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";

@Module({
  controllers: [],
  providers: [{ provide: APP_INTERCEPTOR, useClass: LoggingInterceptor }],
  imports: [GRAModule],
})

export class ApiModule {}
