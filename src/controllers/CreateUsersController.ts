import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserUseCase } from '../usecases/users/create-user-usecase'   
import { UsersRepository } from '../repositories/UsersRepository'



const userRepo = new UsersRepository()

export class CreateUsersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const usecase = new CreateUserUseCase(userRepo)
      const result = await usecase.execute(request.body as any)
      return reply.status(201).send(result)
    } catch (error: any) {
      return reply.status(400).send({ error: error.message })
    }
  }

}
