import { EntityManager } from 'typeorm';
export declare class CacheService {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    clearTypeOrmCache(): Promise<void>;
}
