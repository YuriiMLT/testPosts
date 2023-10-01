import { AppService } from '../service/app.service';
import { CacheService } from '../cache/cache.service';
export declare class AppController {
    private readonly appService;
    private readonly cacheService;
    constructor(appService: AppService, cacheService: CacheService);
    clearCache(): Promise<{
        status: string;
    }>;
    getHello(): string;
}
