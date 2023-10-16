import { describe, test, beforeAll, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app'
import { AppError } from '../errors/AppError'

describe('should test all patrimonios routes', () => {
    let token: string
    const patrimonio = {
        placa: "PC-ERROR",
        descricao: "computador suit test",
        estado: "EXCELENTE",
        valor: 1999.90,
        origem: "PREFEITURA",
        data_entrada: Date.now(),
        id_localizacao: "14b6815a-b0e5-4e92-b155-43a7cf3adac7",
        id_categoria: "d53834cf-e33d-4a3f-8af4-e4a95a6a2961"
    }
    let id_patr: string

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

        return request(app)
            .post('/patrimonio/create')
            .set('authorization', `Bearer ${token}`)
            .send(patrimonio)
            .expect(201)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
                id_patr = res.body.data.id
            })
    })

    test('should give an error by trying to create a patrimonio without a access token', async () => {
        return request(app)
            .post('/patrimonio/create')
            .send(patrimonio)
            .expect(401)
            .catch((res) => {
                expect(res).toBeInstanceOf(AppError)
            })
    })

    test('should update a patrimônio successfully', async () => {
        return request(app)
            .put(`/patrimonio/update/password`)
    })
})