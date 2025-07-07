import { startApp } from './app'
import { env } from './config/env'
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
const app = express();

app.use(express.json());

// Rotas
import { usersRoutes } from './routes/users.Routes';// ajuste conforme o nome exato
app.use('/users', usersRoutes);

// Rota da documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Exporta app se estiver usando em outro lugar
export default app;
async function startServer(){
    const app = await startApp()
    app.listen({port:env?.PORT},(err, addres)=>{
        if(err){
            console.error('Erro no servidor', err)
            process.exit(1)
        }
        console.log(`Servidor executando no IP ${addres}`)
    })
}

startServer()