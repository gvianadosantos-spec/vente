import './contador.scss';
import { useState } from 'react';
import Links from '../../componentes/links/links.jsx'
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx'


function Contador() {
const [n, setn] = useState (0);


function mais (){
  setn(n + 1)
}

function mais10 (){
  setn(n + 10)
}

function mais100 (){
  setn(n + 100)
}


function menos (){
  setn(n - 1)
}

function menos10 (){
  setn(n - 10)
}

function menos100 (){
  setn(n - 100)
}

function reset (){
  setn(n - n)
}


function div2(){
  setn(n /2)
}
function div3(){
  setn(n /3)
}
function div5(){
  setn(n /5)
}
function div10(){
  setn(n /10)
}

function mult2(){
  setn(n * 2)
}
function mult3(){
  setn(n * 3)
}
function mult5(){
  setn(n * 5)
}
function mult10(){
  setn(n * 10)
}


  return (
    <div className="Contador">

    <Cabecalho titulo = 'teste4' />

     <h1 className='Titulo'>
        contador
     </h1>
    <div className = 'Tudo'>

    <button className = 'botao' onClick={menos}>
    -1
    </button>

    <button className = 'botao' onClick={menos10}>
    -10
    </button>

    <button className = 'botao' onClick={menos100}>
    -10
    </button>

    <p className='num'>
    {n}
    </p>

    <button className= 'botao' onClick={mais}>
    +1
    </button >

    <button className= 'botao' onClick={mais10}>
    +10
    </button >

    <button className= 'botao' onClick={mais100}>
    +100
    </button >

    </div>

    <div className= "Tudo">
      <button className='botao'onClick={div2}>
        /2
      </button>
        <button className='botao'onClick={div3}>
        /3
      </button>
        <button className='botao'onClick={div5}>
        /5
      </button>
        <button className='botao'onClick={div10}>
        /10
      </button>
        <button className='botao'onClick={mult2}>
        x2
      </button>
        <button className='botao'onClick={mult3}>
        x3
      </button>
        <button className='botao'onClick={mult5}>
        x5
      </button>
        <button className='botao'onClick={mult10}>
        x10
      </button>
    </div>

    <button className='botao' onClick={reset}>
    RESET
    </button>
 
    <Links/>
    </div>
  );
}

export default Contador;