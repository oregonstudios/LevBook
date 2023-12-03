import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs/promises';

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
  const todosLivros = [];

  for (const nomeColecao of colecao) {
    const snapshot = await getDocs(collection(db, nomeColecao));

    const livrosColecao = snapshot.docs.map((doc) => {
      const livroData = doc.data();
      const livroFormatado = Object.keys(livroData).reduce((acc, key) => {
        acc[key.toLowerCase()] = livroData[key];
        return acc;
      }, {});

      return {
        id: doc.id,
        ...livroFormatado,
      };
    });

    todosLivros.push(...livrosColecao);
  }

  return todosLivros;
}

async function main() {
  const colecoes = ['Fantasia', 'Terror', 'Culinária', 'Religião', 'Ficção', 'Romances'];
  const todosLivros = await obterLivrosPorColecao(colecoes);
  const jsonLivros = JSON.stringify(todosLivros, null, 2);
  const caminhoArquivoJSON = 'livros.json';

  await fs.writeFile(caminhoArquivoJSON, jsonLivros);

  console.log(`Arquivo JSON gerado com sucesso: ${caminhoArquivoJSON}`);
}

main();
