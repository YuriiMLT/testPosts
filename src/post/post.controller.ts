import { Controller, Get, Post, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { PostEntity } from '../entities/post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(201)
  async createPost(@Body() post: PostEntity): Promise<PostEntity> {
    return await this.postService.create(post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<void> {
    return await this.postService.delete(+id);
  }
}
