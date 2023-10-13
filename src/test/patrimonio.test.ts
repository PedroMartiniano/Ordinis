import { describe, test, beforeAll, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app'
import { AppError } from '../errors/AppError'

describe('should test all patrimonios routes', () => {
    let token: string

    beforeAll(async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'adm@dev.com', senha: '123456' })

        token = res.body.token
    })

    test('should create a patrimônio successfully', async () => {
        const patrimonio = {
            placa: `PC-TESTE-${Math.ceil(Math.random() * 1000)}`,
            descricao: "computador suit test",
            estado: "EXCELENTE",
            valor: 1999.90,
            origem: "PREFEITURA",
            data_entrada: Date.now(),
            id_localizacao: "14b6815a-b0e5-4e92-b155-43a7cf3adac7",
            id_categoria: "d53834cf-e33d-4a3f-8af4-e4a95a6a2961"
        }

        const res = await request(app)
            .post('/patrimonio/create')
            .set('authorization', `Bearer ${token}`)
            .send(patrimonio)
            .expect(201)

        expect(res.body.success).toBeTruthy()
    })

    test('should try create a patrimônio without a access token', async () => {
        const patrimonio = {
            placa: "PC-098-TESTE",
            descricao: "computador suit test",
            estado: "EXCELENTE",
            valor: 1999.90,
            origem: "PREFEITURA",
            data_entrada: Date.now(),
            id_localizacao: "14b6815a-b0e5-4e92-b155-43a7cf3adac7",
            id_categoria: "d53834cf-e33d-4a3f-8af4-e4a95a6a2961"
        }

        return request(app)
            .post('/patrimonio/create')
            .send(patrimonio)
            .expect(401)
            .catch((response) => {
                expect(response).toBeInstanceOf(AppError)
            })
    })
})