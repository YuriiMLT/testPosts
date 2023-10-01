import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { CacheService } from '../cache/cache.service'; 

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cacheService: CacheService // Внедрите зависимость CacheService
  ) {}

  @Post('clear-cache')
  async clearCache() {
    await this.cacheService.clearTypeOrmCache();
    return { status: 'Cache cleared' };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
