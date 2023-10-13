import { describe, test, expect, beforeAll } from "vitest";
import request from "supertest";
import { app } from "../app";

describe('should test all categorias routes', () => {
    let token: string

    beforeAll(async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'adm@dev.com', senha: '123456' })

        token = res.body.token
    })

    test('should create a categoria successfully', async () => {
        return request(app)
            .post('/categoria/create')
            .set('authorization', `Bearer ${token}`)
            .send({ descricao: `Cat-Test-${Math.ceil(Math.random() * 1000)}` })
            .expect(201)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })
})