import { Estado } from "./estado";
import { Cep } from "./cep";

export class Cidade {
    public cidadeId: number;
    public descricao: string;
    public estado: Estado;
    public cepList: Array<Cep>;
}