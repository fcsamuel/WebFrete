import { Estado } from "./estado";

export class TabelaFrete {
    public tabelaFreteId: number;
    public origem: Estado;
    public destino: Estado;
    public valor: number;
}