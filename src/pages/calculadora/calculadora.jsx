import './calculadora.scss';
import { useState } from 'react';
import Links from '../../componentes/links/links.jsx'
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx'

function Calculadora() {
const [mostra1, setmostra1] = useState (0);
const [num2, setnum2] = useState (0);
const [num1, setnum1] = useState (0);

 function soma (e) {
    let n = Number(num1) + Number(num2);
    setmostra1(n);
}

 function subtracao (e) {
    let n = Number(num1) - Number(num2);
    setmostra1(n);
}

 function dividir (e) {
    let n = Number(num1) / Number(num2);
    setmostra1(n);
}

 function mult (e) {
    let n = Number(num1) * Number(num2);
    setmostra1(n);
 }
     function potencia (e) {
    let n = Number(num1) ** Number(num2);
    setmostra1(n);
     }
    return(
        <div className='calculadora'>

        <Cabecalho titulo = 'teste3' />

             <div className='corpo'>
                <input type="text" className='inputum' value={num1} onChange={(e)=>setnum1(e.target.value)} />
                <input type="text" className='inputum' value={num2} onChange={(e)=>setnum2(e.target.value)} />

                <p>=</p>

                <p>{mostra1}</p>

                <button className='botao' onClick={soma}>Somar</button>
                <button className='botao' onClick={subtracao}>subtracao</button>
                <button className='botao' onClick={dividir}>dividir</button>
                <button className='botao' onClick={mult}>mult</button>
                <button className='botao' onClick={potencia}>potencia</button>
            </div>


        <Links/>
        </div>
    )
}


export default Calculadora;