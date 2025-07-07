import { FastifyReply, FastifyRequest } from "fastify";
import { UsersRepository } from '../repositories/UsersRepository'
import { FindUserByIdUseCase } from "../usecases/users/find-user-by-id.usecase"; 

export class FindUserByIdController{
    async handle(req:FastifyRequest<{Params:{id:string}}>,
         reply:FastifyReply){
    try{
        const usecase = new FindUserByIdUseCase(new UsersRepository())
        const result = await usecase.execute(req.params.id)
        return reply.send(result)
    }catch(error:any){
        return reply.status(404).send({ error: error.message })
    }
}
}