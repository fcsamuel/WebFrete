import { Estado } from "./estado";

export class Cidade {
    public cidadeId: number;
    public descricao: string;
    public estado: Estado;
    public ceps: Array<string>;
}