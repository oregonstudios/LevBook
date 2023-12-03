import imagemLivro from '../images/LivroTeste.jpeg'

class LivrosContent {
    constructor(categoriaAtual, pathname, livros) {
        this.categoriaAtual = categoriaAtual
        this.links = ['Home', ...gerarListaLinks(pathname)]
        this.livros = livros
    }
}

function primeiraLetraMaiuscula(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const gerarListaLinks = (pathname) => {
    let resultado = pathname.split('/')
    resultado = resultado.filter(link => link !== '');
    resultado = resultado.map(primeiraLetraMaiuscula);
    return resultado
}

export const obterLivrosContent = (pathname) => {
    pathname = pathname.replace(/\/+$/, '');
    switch (pathname) {

        case '/livros/fantasia':
            return new LivrosContent('Fantasia', pathname, new Array(15).fill(
                {
                imagem: imagemLivro,
                titulo: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                preco: "47,21",
                descricao: "descricao",
                genero: "fantasia",
                paginas:"paginas",
                ano:"1954"
            }
            ));

        case '/livros/ficcao':
            return new LivrosContent('Ficção', pathname, new Array(15).fill({
                imagem: imagemLivro,
                titulo: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                preco: "47,21",
                descricao: "descricao",
                genero: "fantasia",
                paginas:"paginas",
                ano:"1954"
            }));

        case '/livros/receitas':
            return new LivrosContent('Receitas', pathname, new Array(15).fill({
                imagem: imagemLivro,
                titulo: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                preco: "47,21",
                descricao: "descricao",
                genero: "fantasia",
                paginas:"paginas",
                ano:"1954"
            }));

        case '/livros/religiao':
            return new LivrosContent('Religião', pathname, new Array(15).fill({
                imagem: imagemLivro,
                titulo: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                preco: "47,21",
                descricao: "descricao",
                genero: "fantasia",
                paginas:"paginas",
                ano:"1954"
            }));

        case '/livros/romances':
            return new LivrosContent('Romances', pathname, new Array(15).fill({
                imagem: imagemLivro,
                titulo: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                preco: "47,21",
                descricao: "descricao",
                genero: "fantasia",
                paginas:"paginas",
                ano:"1954"
            }));

        case '/livros/terror':
            return new LivrosContent('Terror', pathname, new Array(15).fill({
                imagem: imagemLivro,
                titulo: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                preco: "47,21",
                descricao: "descricao",
                genero: "fantasia",
                paginas:"paginas",
                ano:"1954"
            }));
        
        default:
            return new LivrosContent('Livros', pathname, new Array(15).fill({
                imagem: imagemLivro,
                titulo: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                preco: "47,21",
                descricao: "descricao",
                genero: "fantasia",
                paginas:"paginas",
                ano:"1954"
            }));
    }
};

