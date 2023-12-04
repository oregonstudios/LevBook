import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcv4PdY_YZH_wWjt3T7_lyRGhX3wrh6Z0",
  authDomain: "leve-book.firebaseapp.com",
  projectId: "leve-book",
  storageBucket: "leve-book.appspot.com",
  messagingSenderId: "406182333254",
  appId: "1:406182333254:web:d4d7b0f38a5dfc0e32b347"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function obterLivrosPorColecao(colecao) {
  const todosLivros = {
    fantasia: [],
    terror: [],
    receitas: [],  // Você precisa adaptar os nomes dos gêneros conforme as suas coleções
    religiao: [],
    romances: [],
    ficcao: []
  };

  for (const nomeColecao of colecao) {
    const snapshot = await getDocs(collection(db, nomeColecao));

    const livrosColecao = snapshot.docs.map((doc) => {
      const livroData = doc.data();
      const livroFormatado = {
        imagem: "", // Certifique-se de definir a imagem correta aqui
        ...livroData,
        genero: nomeColecao.toLowerCase(),  // Adiciona o gênero
      };

      return livroFormatado;
    });

    todosLivros[nomeColecao.toLowerCase()] = livrosColecao;
  }

  return todosLivros;
}

// Exemplo de uso
async function main() {
  const colecoes = ['Fantasia', 'Terror', 'Receitas', 'Religião', 'Romances', 'Ficção'];
  const todosLivros = await obterLivrosPorColecao(colecoes);

  // Agora você pode usar os arrays como desejar
  console.log('Dados de Fantasia:', todosLivros.fantasia);
  console.log('Dados de Terror:', todosLivros.terror);
  console.log('Dados de Receitas:', todosLivros.receitas);
  console.log('Dados de Religião:', todosLivros.religiao);
  console.log('Dados de Romances:', todosLivros.romances);
  console.log('Dados de Ficção:', todosLivros.ficcao);
}

main();
