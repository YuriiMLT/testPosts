import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class CacheService {
   constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {}

   async clearTypeOrmCache() {
      const queryRunner = this.entityManager.queryRunner;
      if (queryRunner) {
         await queryRunner.clearTable('typeorm_metadata');
      }
   }
}
