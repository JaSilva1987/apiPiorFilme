import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { ApiModule } from "./api/api.module";
import { WinstonModule } from "nest-winston";
import { TerminusModule } from "@nestjs/terminus";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    WinstonModule.forRoot({}),
    TerminusModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
