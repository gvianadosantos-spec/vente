import "./ingresso.scss"
import { useState } from 'react';
import Links from '../../componentes/links/links.jsx'
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx'

export default function Ingresso () {
    const [n, setn] = useState (0);
    const [mostra, setmostra] = useState (0);
    const [meia, setmeia] = useState (false)
    const[cupom, setcupom] = useState ("")

    let valor_ingresso = 30

    
 function calcular (e) {
    let x = valor_ingresso * n ;

    if (meia){
        x = x / 2
    }
    
        if (cupom == "cupom10"){
            x = x * 0.9
        }
        if (cupom == "cupom20"){
            x = x * 0.8
        }
    
        setmostra(x)    
 }





    return(
        <div className="corpo-ingresso">
              <Cabecalho titulo = 'teste4' />
            <div className="ingresso">

                <input type="text" className='inputum' value={n} onChange={(e)=>setn(e.target.value)} />

        <div className="meia">
            <input type="checkbox" checked={meia} onChange={(e)=>setmeia(e.target.checked)} />
            <p>meia entrada</p>
        </div>
        <input type="text" className="cupom" value={cupom} onChange={(e)=>setcupom(e.target.value)}/>

        <button className="mostrar" onClick={calcular}>
            calcular
        </button>
           <p>
            valor dos ingresso: {mostra}
           </p>
            </div>
             <Links/>
        </div>
    )
}