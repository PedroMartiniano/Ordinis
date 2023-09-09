export function searchParams(key: string[], value: any[]) {
    let searchParam: any = {}

    for (let i = 0; i < key.length; i++) {
        switch (key[i]) {
            case 'placa':
                searchParam.placa = {
                    equals: value[i]
                }
                break
            case 'descricao':
                searchParam.descricao = {
                    contains: value[i]
                }
                break
            case 'estado':
                searchParam.estado = {
                    equals: value[i]
                }
                break
            case 'origem':
                searchParam.origem = {
                    equals: value[i]
                }
                break
            case 'status':
                searchParam.status = {
                    equals: parseInt(value[i])
                }
                break
            case 'resp_entrega':
                searchParam.resp_entrega = {
                    contains: value[i]
                }
                break
            case 'resp_retirada':
                searchParam.resp_retirada = {
                    contains: value[i]
                }
                break
            case 'localizacao':
                searchParam.localizacao = {
                    equals: value[i]
                }
                break
            case 'categoria':
                searchParam.categoria = {
                    equals: value[i]
                }
                break
            case 'id_usuario':
                searchParam.id_usuario = {
                    equals: value[i]
                }
                break
        }
    }

    return searchParam
} 