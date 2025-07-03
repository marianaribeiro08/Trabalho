import Fastify from 'fastify'
import { AppDataSource } from './data-source'
import { usersRoutes } from './routes/users.Routes' 

export async function startApp(){
    const app = Fastify()
    await AppDataSource.initialize().then(
        ()=>{
            console.log('Banco de dados inicializado')
        }
    ).catch((ex)=>{
        console.log('Erro de conexao do banco de dados', ex)
        process.exit(1)
    })
    app.register(usersRoutes)
    return app


}







