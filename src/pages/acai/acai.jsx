import './acai.scss';
import Links from '../../componentes/links/links.jsx'
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx'
import { useState } from 'react';

export default function Acai (){
    const [mostra, setmostra] = useState (0);
    const [grande, setgrande] = useState (0)
    const[medio, setmedio] = useState (0)
    const[pequeno, setpequeno] = useState (0)
    const[cupom, setcupom] = useState ("")

function calcular(){

    let x = (grande * 25) + (medio * 23) + (pequeno * 17)
    if (cupom === "quero10"){
        x = x * 0.9
    }
    if (cupom === "quero20"){
        x = x * 0.8
    }

    setmostra(x)
}

    return(
        <div className='acai-corpo'>
            <Cabecalho/>
            <div className='acai'>
                <div className='titulo'>
                    <p>
                        pagamento açai 
                    </p>
                </div>
                <div className='acais'>
                    <div className="copo">
                        <img src="/assets/img/acaipequeno.png" alt="Contador" className="img-acai" />
                         <input type="number" className='inputum' value={pequeno} onChange={(e)=>setpequeno(e.target.value)} />
                         <p>
                            17 R$
                         </p>
                    </div>
                    <div className="copo">
                         <img src="/assets/img/acaimedio.png" alt="Contador" className="img-acai" />
                          <input type="number" className='inputum' value={medio} onChange={(e)=>setmedio(e.target.value)} />
                          <p>
                            23R$
                          </p>
                    </div>
                    <div className="copo">
                        <img src="/assets/img/acaigrande.png" alt="Contador" className="img-acai" />
                        <input type="number" className='inputum' value={grande} onChange={(e)=>setgrande(e.target.value)} />
                        <p>
                            25R$
                        </p>
                    </div>
                </div>
                <div className='div-cupom'>
                    <p>
                        insera o cupom
                    </p>
                    <input type="text" className="cupom" value={cupom} onChange={(e)=>setcupom(e.target.value)}/>
                </div>
               
                
        <button className="mostrar" onClick={calcular}>
            calcular
        </button>
        <div className="valorfinal">
            <p>
                o valor ficou: {mostra} Reais
            </p>
        </div>
            </div>
            <Links/>
        </div>
    )
}
