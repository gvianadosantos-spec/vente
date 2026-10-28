import './input.scss';
import { useState } from 'react';
import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex } from "@uiw/color-convert";
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx'
import Links from '../../componentes/links/links.jsx'


function Input() {
    const [text, settext] = useState ("nada com nada");

   const [text2, settext2] = useState ("nada com nada2");
   const [aparece2, setaparece2] = useState ("clique no botão para aparecer");

   const [hsva, setHsva] = useState({ h: 255, s: 255, v: 255, a: 1 });
   const [cor, setcor] = useState("")

   function muda_text (e) {
      let n = e.target.value;
      settext (n)
      
   }

   function mudar_text2 (e) {
      let n = e.target.value;
      settext2 (n)
      
   }

   function  mudar_botao(){
  setaparece2 (text2)
}

  function mudar_cor (e) {
      let n = e.target.value;
      setcor (n)
  }
     return (
        <div className='input'
         style={{
  backgroundColor: cor,
 }}>



            <div className='titulo'>

 <Cabecalho titulo = 'teste5' />

              <h1>
                escreva um tesxto no input e veja o seu texto a baixo
            </h1>   
            </div>
           
           <div className='escrever'>
            <input typeof='text' placeholder='escreva qualquer coisa' onChange={muda_text}/>
           </div>

           <div className='aparecer'>
             <p>
                {text}
             </p>
           </div>

      <p>
         parte 2
      </p>

      <h1> escreva algo e depois clique no botâo</h1>

       <input typeof='text' placeholder='escreva qualquer coisa' onChange={mudar_text2}/>

      <p>
         {aparece2}
      </p>

       <button className= 'botao' onClick={mudar_botao}>
    clique para mudar
    </button >

    <p>
      parte 3
    </p>

    <h1> selecione uma cor e veja a magica </h1>

 <div
           style={{
    backgroundColor: hsvaToHex(hsva)
  }}
 >

      <Wheel
  color={hsva}
  onChange={(cor) => setHsva({ ...hsva, ...cor.hsva })}
  />
 </div>
 
 <p>
   parte 3.2
 </p>

 <div>


<input type='color'  onChange={mudar_cor}/>

<Links/>
 </div>
        </div>
     )
}

export default Input;