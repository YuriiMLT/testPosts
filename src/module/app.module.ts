import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { CacheService } from '../cache/cache.service';
import { AppDataSource } from 'dataSource';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource),
  ],
    providers: [CacheService],
    exports: [CacheService],
})
export class AppModule {}
