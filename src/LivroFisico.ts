
import Livro from "./Livro";

export default class LivroFisico extends Livro {
    numerosPaginas: number;

    constructor(titulo: string, autor: string, numerosPaginas: number) {
        super(titulo, autor ,String);
        this.numerosPaginas = numerosPaginas;
    }

    public override exibirDetalhes(): void {
        console.log("ISBN: ${this.isbn}");
        console.log("Titulo: ${this.titulo}");
        console.log("Autor: ${this.autor}");
        console.log("Numero de Paginas: ${this.numerosPaginas}");
    }
}

