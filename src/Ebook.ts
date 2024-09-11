


import Livro from "./Livro";

export default class Ebook extends Livro {
    tamanhoArquivo:tamanho;

    constructor(titulo: string, autor: string, tamanhoArquivo: number) {
        super(titulo, autor);
        this.tamanhoArquivo = tamanhoArquivo;
    }

    public override exibirDetalhes(): void {
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Tamanho do Arquivo: ${this.tamanhoArquivo}`);
    }
}