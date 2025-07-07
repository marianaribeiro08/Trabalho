import { FastifyReply, FastifyRequest } from "fastify";
import { UsersRepository } from "../repositories/UsersRepository" 
import { ListUsersUsecase } from "../usecases/users/listAllUsers";


const repo = new UsersRepository()
export class ListUsersController{
    async handle(req:FastifyRequest, reply:FastifyReply){
        const usecase = new ListUsersUsecase(repo)
        const result = await usecase.execute()
        return reply.status(200).send(result)

    }
}