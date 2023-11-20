class LivrosContent {
    constructor(categoriaAtual, pathname) {
        this.categoriaAtual = categoriaAtual;
        this.links = ['Home', ...gerarListaLinks(pathname)];
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
            return new LivrosContent('Fantasia', pathname);

        case '/livros/ficcao':
            return new LivrosContent('Ficção', pathname);

        case '/livros/receitas':
            return new LivrosContent('Receitas', pathname);

        case '/livros/religiao':
            return new LivrosContent('Religião', pathname);

        case '/livros/romances':
            return new LivrosContent('Romances', pathname);

        case '/livros/terror':
            return new LivrosContent('Terror', pathname);
        
        default:
            return new LivrosContent('Livros', pathname);
    }
};

