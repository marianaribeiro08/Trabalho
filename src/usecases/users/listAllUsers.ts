import { User } from "../../entities/user"
import { IUsersRepository } from "../../repositories/IUsersRepository"

export class ListUsersUsecase{
    constructor(private usersRepository:IUsersRepository){}
    async execute (): Promise<Omit<User, 'password'>[]>{
        const users = await this.usersRepository.findAll()
        return users.map(({password, ...user})=>user)
    
    
    }
}