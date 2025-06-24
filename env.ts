import 'dotenv/config'

import { z } from "zod"

export const envschema = z.object({
    DATABASE_FILE: z.string(),
    JWT_SECRET: z.string(),
    PORT: z.coerce.number().default(3333),
    NODE_ENV: z.enum(['dev', 'production', 'test']).default('dev')

})

const _env = envschema.safeParse(process.env)

if(! _env.success){
    console.error('Variavel de ambiente invélida', _env.error.format())
    process.exit(1)
}

export const env = _env.data