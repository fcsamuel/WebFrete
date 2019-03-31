import { Cidade } from "./cidade";

export class Estado {
    public estadoId: number
    public descricao: string;
    public sigla: string;
    public cidades: Array<Cidade>;
}