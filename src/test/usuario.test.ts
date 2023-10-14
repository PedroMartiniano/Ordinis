import { describe, test, expect, beforeAll } from "vitest"
import request from "supertest"
import { app } from "../app"

describe('should test all usuarios routes', () => {
    let token: string
    let user_id: string
    const usuario = {
        nome: "func",
        sobrenome: "test",
        permissao: "FUNCIONARIO",
        cpf: `12345678${Math.max(100, Math.ceil(Math.random() * 1000))}`,
        email: `func${Math.ceil(Math.random() * 100)}@test.com`,
        senha: "123456"
    }

    beforeAll(async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'adm@dev.com', senha: '123456' })

        token = res.body.token
    })

    test('should create a user successfully', async () => {
        return request(app)
            .post('/usuario/create')
            .set('authorization', `Bearer ${token}`)
            .send(usuario)
            .expect(201)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
                user_id = res.body.data.id
            })
    })

    test('should get a user by id successfully', async () => {
        return request(app)
            .get(`/usuario/get/${user_id}`)
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test.skip('should edit an usuario successfully', async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: usuario.email, senha: usuario.senha })

        return request(app)
            .put('/usuario/update')
            .set('authorization', `Bearer ${res.body.token}`)
            .send({ nome: 'edited', sobrenome: usuario.sobrenome, cpf: usuario.cpf })
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should delete an usuario successfully', async () => {
        return request(app)
            .delete(`/usuario/delete/${user_id}`)
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })
})