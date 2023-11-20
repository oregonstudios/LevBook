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
          <Route path='login' element={<Login />} />
          <Route path='favoritos' element={<Favoritos />} />
          
          <Route path='livros' element={<Livros/>}>
            <Route path='fantasia'  element={<Livros />} />
            <Route path='ficcao'    element={<Livros />} />
            <Route path='receitas'  element={<Livros />} />
            <Route path='religiao'  element={<Livros />} />
            <Route path='romances'  element={<Livros />} />
            <Route path='terror'    element={<Livros />} />
          </Route>

          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

