import "./cadastro.scss";
import Links from '../../componentes/links/links.jsx'
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx'

function Alterou (){
          alert('Departamento selecionado: Financeiro');
      }
function Alterou2 (e){
      let novovalor = e.target.value;
          alert('Alterou o valor do input para ' + novovalor );
     }
function passou (){
          alert('pasoou o dedo em cima');
      }

function cadastro() {
  return (
    <div className="cadastro">

      <Cabecalho titulo = 'teste2' />

        <div className="corpo">
            <h1>
                cadastro
            </h1>

            <input typeof='text' placeholder='escreva seu nome' onChange={Alterou2}/>


            <p>Departamento</p>
            <select onChange={Alterou}>
                <option >Administração</option>
                <option>Recursos Humanos</option>
                <option>Financeiro</option>
                <option>Marketing</option>
                <option>TI</option>
            </select>

          <label>
            <input type="radio" name="opcao" />
            Opção 1
          </label>

          <label>
            <input type="radio" name="opcao" />
            Opção 2
          </label>

          <label>
            <input type="radio" name="opcao" />
            Opção 3
          </label>

          <label>
            <input type="radio" name="opcao" />
            Opção 4
          </label>

    <Links/>
        </div>
    </div>
  );
}

export default cadastro;