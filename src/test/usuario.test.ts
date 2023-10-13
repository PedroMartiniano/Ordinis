import { describe, test, expect, beforeAll } from "vitest"
import request from "supertest"
import { app } from "../app"

describe('should test all usuarios routes', () => {
    let token: string

    beforeAll(async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'adm@dev.com', senha: '123456' })

        token = res.body.token
    })

    test('should create a user successfully', async () => {
        const usuario = {
            nome: "func",
            sobrenome: "test",
            permissao: "FUNCIONARIO",
            cpf: `12345678${Math.max(100, Math.ceil(Math.random() * 1000))}`,
            email: `func${Math.ceil(Math.random() * 100)}@test.com`,
            senha: "123456"
        }

        return request(app)
            .post('/usuario/create')
            .set('authorization', `Bearer ${token}`)
            .send(usuario)
            .expect(201)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should get a user by id successfully', async () => {
        return request(app)
            .get(`/usuario/get/5bab45d2-e58e-4c00-897d-9d18cc08a95e`)
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })
})