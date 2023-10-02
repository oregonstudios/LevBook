import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';

import Footer from 'components/Footer'
import Header from 'components/Header'


export default function AppRoutes() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

