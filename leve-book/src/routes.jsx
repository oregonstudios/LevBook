// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Paginas
import Home from 'pages/Home';
import Login from 'pages/Login';
import Favoritos from 'pages/Favoritos'
import Livros from 'pages/Livros';
// Componentes
//import Footer from 'components/Footer'
//import Header from 'components/Header'


export default function AppRoutes() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/favoritos' element={<Favoritos />} />
          
          <Route path='/livros/fantasia'  element={<Livros />} />
          <Route path='/livros/ficcao'    element={<Livros />} />
          <Route path='/livros/receitas'  element={<Livros />} />
          <Route path='/livros/religiao'  element={<Livros />} />
          <Route path='/livros/romances'  element={<Livros />} />
          <Route path='/livros/terror'    element={<Livros />} />

          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

