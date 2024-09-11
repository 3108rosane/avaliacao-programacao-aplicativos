import Livro from "./Livro"
import leia from "readline-sync" 
import LivroFisico from "./LivroFisico";
import Ebook from "./Ebook";

export default class Biblioteca {
    livros: Livro[] = []

    adicionarLivro(): void {
        console.log("-adicionar ficha-")
        var titulo = leia.question("solicitar o titulo: ");
        var autor = leia.question("nome do autor: ");
        var tipoLivro = leia.keyInSelect(["Livro Fisico", "Ebook"], 'ESCOLHA UMA OPÇÃO: ') + 1;
        var livro: Livro;
        if (tipoLivro === 1) {            
            var numerosPaginas = leia.questionInt("quantas paginas ");
            livro = new LivroFisico(titulo, autor, numerosPaginas)
        } else {            
            var tamanhoArquivo = leia.questionInt("qual o tamanho do arquivo ");
            livro = new Ebook(titulo, autor, tamanhoArquivo);
        }
        this.save(livro);
    }

    removerLivro(): void {
        console.log("---------------remover livro-------------------")
        var isbnLivro = leia.question("qual O ISBN do livro: ")
        for (var i = 0; i < this.livros.length; i++) {
            if (isbnLivro === this.livros[i].getisbn()) {
                this.livros.splice(i, 1);
                return;
            }
        }        
    }
   
}