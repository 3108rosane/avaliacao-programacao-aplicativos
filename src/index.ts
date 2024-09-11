import leia from "readline-sync"
import Biblioteca from "./Biblioteca";

var biblioteca = new Biblioteca();
do {
    console.log("inicio")
    var Menu = leia.keyInSelect(["add livros", "remover livros", "buscar livros"], "escolha a opcao: ") + 1
    switch (Menu) {
        case 1:
            biblioteca.adicionarLivros();
            break;
        case 2:
            biblioteca.removerLivros();
            break;
        case 3:
            biblioteca.buscarLivros();
            break;
        default:
            console.log("VOCE ESCOLHEU SAIR");
            break;
    }
} while (Menu !== 0);