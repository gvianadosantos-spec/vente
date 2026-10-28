import './cep.scss';
import { useState } from 'react';
import Links from '../../../componentes/links/links.jsx'
import Cabecalho from '../../../componentes/cabecalho/cabecalho.jsx'
import axios from 'axios';

function Cep() {

const [cep, setcep] = useState('')
const [endereco, setendereco] = useState()
const [cor, setcor] = useState("")

         function mudar_cor (e) {
      let n = e.target.value;
      setcor (n)
  }



async function buscarcep() {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
        
        let resp =   await axios.get(url);
        let dados = resp.data;
        let msg = dados.logradouro + " - " + dados.bairro + " - " + dados.localidade + " - " + dados.uf;
        setendereco(msg);
}

return(
    <div className='corpo-cep'>
        <Cabecalho cor={cor}/>
        <div className='cep'>

            <p className='p'>
                digite seu cep
            </p>
            <input type='text' values={cep} onChange={(e)=>setcep(e.target.value)}/>

            <button onClick={buscarcep}>
                mostra endereço
            </button>

            <p className='p'>
                {endereco}
            </p>
            <p>
                muda a cor negocio
            </p>
             <input type='color'  onChange={mudar_cor}/>

        </div>
    <Links/>
    </div>
)

} 

export default Cep