import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { writeFileSync } from "fs";
import { HttpExceptionFilter } from "./api/filters/http-exception.filter";
import { AppModule } from "./app.module";
import { API_DESCRIPTION, API_NAME, API_VERSION } from "./constants";
import { GRAService } from "./api/modules/gra/gra.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "error", "warn", "debug"],
  });

  const config = new DocumentBuilder()
    .setTitle(API_NAME)
    .setDescription(API_DESCRIPTION)
    .setVersion(API_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  writeFileSync("./swagger-spec.json", JSON.stringify(document));

  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();

  // Obtenha uma instância do serviço GRAService
  const graService = app.get(GRAService);

  // Caminho para o arquivo CSV
  const filePath = "src/database/arquivoImportacao/arquivo.csv"; // Defina o caminho para o seu arquivo CSV aqui

  // Execute a função impFilesCSV
  await graService.impFilesCSV(filePath);

  await app.listen(3005);
}
bootstrap();
