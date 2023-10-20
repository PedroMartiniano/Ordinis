import { describe, test, beforeAll, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app'

describe('should test all patrimonios routes', () => {
    let token: string
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
    let id_patr: string

    beforeAll(async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'adm@dev.com', senha: '123456' })

        token = res.body.token
    })

    test('should create a patrimônio successfully', async () => {
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

    test('should update a patrimônio successfully', async () => {
        return request(app)
            .put(`/patrimonio/update/${id_patr}`)
            .set('authorization', `Bearer ${token}`)
            .send({
                ...patrimonio,
                descricao: 'Computador Editado'
            })
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should update patrimônio localizacao successfully', async () => {
        return request(app)
            .patch(`/patrimonio/update-loc/${id_patr}`)
            .set('authorization', `Bearer ${token}`)
            .send({ id_localizacao: '214ce654-4738-4a5e-b618-580f1ee4e499' })
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should get a patrimonio by his id successfully', async () => {
        return request(app)
            .get(`/patrimonio/get/${id_patr}`)
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should get all patrimônios successfully', async () => {
        return request(app)
            .get('/patrimonio/get-all')
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should get a patrimonio with objects by his id successfully', async () => {
        return request(app)
            .get(`/patrimonio/get-names/${id_patr}`)
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should get a patrimonio by his placa successfully', async () => {
        return request(app)
            .get(`/patrimonio/get-placa/${patrimonio.placa}`)
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should get all "RUIM" e "PESSIMO" patrimônios successfully', async () => {
        return request(app)
            .get(`/patrimonio/get-all-ruins`)
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should search patrimonios by param successfully', async () => {
        return request(app)
            .get(`/patrimonio/search?categoria=${patrimonio.id_categoria}`)
            .set('authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })

    test('should soft delete a patrimonio by his id successfully', async () => {
        return request(app)
            .delete(`/patrimonio/baixa/${id_patr}`)
            .set('authorization', `Bearer ${token}`)
            .send({ data_saida: Date.now(), resp_entrega: 'Lucas Rodrigues', resp_retirada: 'Vinicius Cintra' })
            .expect(201)
            .then((res) => {
                expect(res.body.success).toBeTruthy()
            })
    })
}) 