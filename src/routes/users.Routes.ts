import { FastifyInstance } from "fastify";
import { ListUsersController } from "../controllers/ListUsersController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { FindUserByIdController } from "../controllers/FindUserByIdController";
import { CreateUsersController } from "../controllers/CreateUsersController";

const createUserController = new CreateUsersController()
const listUserController = new ListUsersController()
const findByIdController = new FindUserByIdController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

export async function usersRoutes(app:FastifyInstance){
    app.post('/users', createUserController.handle)
    app.get('/users', listUserController.handle)
    app.get('/users/:id', findByIdController.handle)
    app.put('/users/update/:id', updateUserController.handle)
    app.delete('/users/delete/:id', deleteUserController.handle)
}
import { Router } from 'express';
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', (req, res) => {
  const { nome, email } = req.body;
  res.status(201).json({ message: 'Usuário criado com sucesso', nome, email });
});

export default router;
