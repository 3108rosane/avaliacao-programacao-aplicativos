
import Livro from "./Livro";


export default class Livro {
    titulo: string;
    autor: string;
    isbn: string;
    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = String(Math.floor(Math.random() * 89999) + 10000);
    }
    public exibirDetalhes(): void {
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
    }
    
}