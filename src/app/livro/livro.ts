import { Assunto } from "../assunto/assunto";
import { Autor } from "../autor/autor";
import { Venda } from "../venda/venda";

export interface Livro {
    codl: number;
    titulo: string;
    editora: string;
    edicao: number;
    anoPublicacao: string;
    autores: Autor[];
    assuntos: Assunto[];
    precos: Venda[];
}
