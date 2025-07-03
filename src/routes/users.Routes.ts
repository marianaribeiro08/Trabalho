import { FastifyInstance } from 'fastify'
import { CreateUsersController } from '../controllers/CreateUsersController'

const controller = new CreateUsersController()
export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', controller.handle)
}
