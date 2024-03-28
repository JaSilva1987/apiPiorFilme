"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
const http_exception_filter_1 = require("./api/filters/http-exception.filter");
const app_module_1 = require("./app.module");
const constants_1 = require("./constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ["log", "error", "warn", "debug"],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle(constants_1.API_NAME)
        .setDescription(constants_1.API_DESCRIPTION)
        .setVersion(constants_1.API_VERSION)
        .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT" }, "authorization")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    (0, fs_1.writeFileSync)("./swagger-spec.json", JSON.stringify(document));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map