import React from 'react';
import ReactDOM from 'react-dom/client';

import Contador from './pages/contador/contador.jsx';
import App from './pages/app/App.jsx';
import Cadastro from './pages/cadastro/cadastro.jsx';
import Input from './pages/input/input.jsx'
import Calculadora from './pages/calculadora/calculadora.jsx'
import Cep from './pages/chamadoapi/cep/cep.jsx'
import Ingresso from './pages/ingessos/ingresso.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
          <Route  path='/' element= {<App/>}/>
          <Route  path='/cadastro' element= {<Cadastro/>}/> 
          <Route  path='/contador' element= {<Contador/>}/>
          <Route  path='/input' element= {<Input/>}/>
          <Route  path='/calculadora' element= {<Calculadora/>}/>
          <Route  path='/buscacep' element= {<Cep/>}/>
           <Route  path='/ingresso' element= {<Ingresso/>}/>
      </Routes>
    </BrowserRouter>
  
);