// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Paginas
import Home from 'pages/Home';
import Login from 'pages/Login';
import Favoritos from 'pages/Favoritos'
import Livros from 'pages/Livros';
import Popup from 'pages/HomePopup';
import PopupTwo from 'pages/PopupTwo';
import PopupThree from 'pages/PopupThree';
import PopupFour from 'pages/PopupFour';
// Componentes
import livrosConfig from './routes/livrosConfig.json'


export default function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='popup' element={<Popup />} />
          <Route path='popuptwo' element={<PopupTwo />} />
          <Route path='popupthree' element={<PopupThree />} />
          <Route path='popupfour' element={<PopupFour/>} />
          <Route path='favoritos' element={<Favoritos />} />
          
          <Route path='livros' element={<Livros/>}>
            {livrosConfig.map( rota => (
              <Route path={rota.path}  element={<Livros />} />
            ))}
          </Route>

          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}