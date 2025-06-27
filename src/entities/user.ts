import 'reflect-metadata';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({type:'varchar', length:100})
  name!: string
  @Column({type:'varchar', unique: true})
  email!: string
  @Column({type:'varchar', unique: true, length:15})
  phone!: string
  @Column({type:'varchar', nullable: false, length:32})
  password!: string
  @CreateDateColumn()
  created_at!:Date
    post: any;
    comments: any;


}
