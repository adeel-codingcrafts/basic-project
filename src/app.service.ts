import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const port = this.configService.get<number>('PORT') || 3000;
    return `Hello World! Server is running on port ${port}`;
  }
}
