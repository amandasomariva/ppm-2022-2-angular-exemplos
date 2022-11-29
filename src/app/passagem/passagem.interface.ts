export interface Passagem {
    id?: number;
    dataIda: Date,
    dataVolta: Date,
    origem: string,
    destino: string,
    tipoPassagem: string
}