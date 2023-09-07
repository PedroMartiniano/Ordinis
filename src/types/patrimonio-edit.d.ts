export interface EditPatrimonioProps {
    placa: string,
    descricao: string,
    estado: 'EXECELENTE' | 'OTIMO' | 'REGULAR' | 'RUIM' | 'PESSIMO',
    valor: number,
    origem: 'PREFEITURA' | 'NV',
    id_localizacao: string,
    id_categoria: string
}