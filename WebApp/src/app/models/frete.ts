import { TabelaFrete } from "./tabelaFrete";
import { Estado } from "./estado";

export class Frete {
    public freteId: number;
    public origem: Estado;
    public destino: Estado;
    public tabelaFrete: TabelaFrete;
    public peso: number;
    public valorTotal: number;
}