import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { API_VERSION } from "./constants";

@Controller()
export class AppController {
  @Get("/running")
  @ApiOperation({ summary: "Version running" })
  @ApiResponse({ status: 200, description: "Endpoint executed with sucess" })
  getVersionEndpoint(): string {
    return `Running Version ${API_VERSION}`;
  }
}
