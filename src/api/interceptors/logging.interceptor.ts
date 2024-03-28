import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();

    if (request.originalUrl != '/health') {
      const date = new Date();
      console.info(date.toISOString(), 'Request: ', request.originalUrl);
      console.info(date.toISOString(), 'Request Body: ', request.body);

      return next.handle().pipe(
        tap(() => {
          console.info(`Run on ${date.toISOString()} - Response...`);
        }),
      );
    }

    return next.handle();
  }
}
