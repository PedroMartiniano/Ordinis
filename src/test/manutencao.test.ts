import { describe, test, expect, beforeAll } from "vitest";
import request from "supertest";
import { app } from "../app";

describe('Should test all manutenção routes', () => {
    const id_prestador: string = '25d9d473-e260-440b-b131-07b9d71d473a'
    const id_patrimonio: string = '19f0ea37-e131-428d-b10c-f0e12b3f284c'

    // let data_fim = new Date()
    // data_fim.setDate(data_fim.getDate() + 1)
    const manutencao = {
        descricao: 'Manutenção teste automatizado.',
        data_inicio: Date.now(),
        data_fim: Date.now(),
        valor: 999.9,
        id_prestador
    }
    let token: string

    beforeAll(async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'adm@dev.com', senha: '123456' })

        token = res.body.token
    })

    test.skip('Should create a manutenção successfully', async () => {
        console.log(manutencao)
        return request(app)
            .post(`/manutencao/create/${id_patrimonio}`)
            .set('authorization', `Bearer ${token}`)
            .send(manutencao)
            .expect(201)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })
})