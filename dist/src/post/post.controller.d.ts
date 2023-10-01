import { PostService } from '../service/post.service';
import { PostEntity } from '../entities/post.entity';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    createPost(post: PostEntity): Promise<PostEntity>;
    deletePost(id: string): Promise<void>;
}
