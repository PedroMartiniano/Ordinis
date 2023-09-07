import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
    const senha = await hash('123456', 4)
    
    const adm = await prisma.usuario.upsert({
        where: {
            cpf: '12345678919'
        },
        update: {},
        create: {
            nome: 'User',
            sobrenome: 'Adm',
            permissao: 'ADMINISTRADOR',
            cpf: '12345678919',
            Sessao: {
                create: {
                    email: 'adm@seed.com',
                    senha,
                }
            }
        }
    })

    const localizacao = await prisma.localizacao.upsert({
        where: {
            descricao: 'Sala 01'
        },
        update: {},
        create: {
            descricao: 'Sala 01'
        }
    })

    const categoria = await prisma.categoria.upsert({
        where: {
            descricao: 'eletronico'
        },
        update: {},
        create: {
            descricao: 'eletronico'
        }
    })

    const patr = await prisma.patrimonio.upsert({
        where: {
            placa: 'PC001'
        },
        update: {},
        create: {
            placa: "PC001",
            descricao: "computador windows",
            estado: "PESSIMO",
            valor: 799.90,
            origem: "PREFEITURA",
            data_entrada: new Date(),
            resp_entrega: "joao paulo faleiros",
            id_localizacao: localizacao.id,
            id_categoria: categoria.id,
            id_usuario: adm.id
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })