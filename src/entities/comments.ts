import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from './user'
import { Post } from './post' 
import { v4 as uuidv4 } from 'uuid'

@Entity('comments')
export class Comment {
  @PrimaryColumn('uuid')
  id: string = uuidv4()

  @Column()
  content!: string

  @CreateDateColumn()
  created_at!: Date

  @ManyToOne(() => User, user => user.comments)
  user!: User

  @ManyToOne(() => Post, post => post.comments)
  post!: Post
}

