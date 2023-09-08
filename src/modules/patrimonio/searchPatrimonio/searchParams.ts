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
        }
        
    }
    return searchParam
} 