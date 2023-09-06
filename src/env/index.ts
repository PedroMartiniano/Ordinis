import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
    DATABASE_URL: z.string(),
    PORT: z.coerce.number(),
    JWT_SECRET: z.string(),
    NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev')
})

const _env = envSchema.safeParse(process.env)

if(!_env.success){
    throw new Error('Invalid environments variables') // verificar (pode quebrar o servidor)
}

export const env = _env.data