import { Estado } from "./estado";

export class Frete {
    public freteId: number;
    public origem: Estado;
    public destino: Estado;
    public valor: number;
    public peso: number;
    public valorTotal: number;
}