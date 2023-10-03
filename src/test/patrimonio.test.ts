import { app } from "../app"
import request from 'supertest'
import { beforeAll, describe, it } from 'vitest'

describe("Should test all Patrimônio's routes", () => {
    let token: string

    beforeAll(async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'adm@seed.com', senha: '123456' })

        token = res.body.token
    })

    it('Should create a patrimônio successfully', async () => {
        const patrimonio = {
            placa: "PC099",
            descricao: "computador Windows",
            estado: "EXECELENTE",
            valor: 1999.90,
            origem: "PREFEITURA",
            data_entrada: new Date(),
            id_localizacao: "d1e6b410-aaf0-46ea-b0d2-e25acefbc9f0",
            id_categoria: "7dad0941-3c0f-48f2-a8e8-9f64ca2aa10c"
        }

        await request(app)
            .post('/patrimonio/create')
            .set('authorization', `Bearer ${token}`)
            .send(patrimonio)
            .expect(201)
    })

})