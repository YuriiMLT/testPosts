import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async create(post: PostEntity): Promise<PostEntity> {
    const newPost = await this.postRepository.save(post);
    return newPost;
  }

  async delete(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }

  async findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<PostEntity | undefined> {
    return this.postRepository.findOne({ where: { id } });
  }
  
}

