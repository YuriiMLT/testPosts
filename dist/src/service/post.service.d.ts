import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
export declare class PostService {
    private readonly postRepository;
    constructor(postRepository: Repository<PostEntity>);
    create(post: PostEntity): Promise<PostEntity>;
    delete(id: number): Promise<void>;
    findAll(): Promise<PostEntity[]>;
    findOne(id: number): Promise<PostEntity | undefined>;
}
