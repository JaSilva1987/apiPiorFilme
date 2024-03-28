import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HttpExceptionDto } from './api/filters/http-exception.dto';
import { API_VERSION } from './constants';

@Controller()
export class AppController {
  @Get('/running')
  @ApiOperation({ summary: 'Version running' })
  @ApiResponse({ status: 200, description: 'Endpoint executed with sucess' })
  @ApiResponse({
    status: 400,
    description: 'Invalid executed Endpoint',
    type: HttpExceptionDto,
  })
  getVersionEndpoint(): string {
    return `Running Version ${API_VERSION}`;
  }
}
