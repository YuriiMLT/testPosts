import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('posts')
export class PostEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    title: string;

    @Column({ type: 'text', nullable: true, comment: 'This is content'})
    content: string;

    @Column({ type: 'text'})
    shortDescription: string;

    @Column({ type: 'text', nullable: true, default: 'default-image-url.jpg' })
    imgUrl: string | null;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
}


/* 
ID
title
content
short-description
img-url
created-at
updated-at
categories  //  в будущем сделать отдельную таблицу
*/
