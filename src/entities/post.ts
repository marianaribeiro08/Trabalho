import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from './user'
import { Comment } from './comments' 
import { v4 as uuidv4 } from 'uuid'

@Entity('posts')
export class Post {
  @PrimaryColumn('uuid')
  id: string = uuidv4()

@Column({type:'text'})
  content!: string

@CreateDateColumn()
  created_at!: Date

@ManyToOne(() => User, user => user.posts)
  user!: User

@OneToMany(() => Comment, comment => comment.post)
  comments!: Comment[]

}

