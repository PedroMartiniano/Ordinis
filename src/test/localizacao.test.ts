import { describe, test, expect, beforeAll } from "vitest";
import request from "supertest";
import { app } from "../app";

describe('should test all localizacao routes', () => {
    let token: string

    beforeAll(async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'adm@dev.com', senha: '123456' })

        token = res.body.token
    })

    test('should create a localização successfully', async () => {
        return request(app)
            .post('/localizacao/create')
            .set('authorization', `Bearer ${token}`)
            .send({ descricao: `Loc-Test-${Math.ceil(Math.random() * 1000)}` })
            .expect(201)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })
})