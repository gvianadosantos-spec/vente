import './App.scss';
import Links from '../../componentes/links/links.jsx'
import Cabecalho from '../../componentes/cabecalho/cabecalho.jsx'

function Alterou (){
    alert('Alterou o valor do select');
}

function passou (){
    alert('passou o dedo em cima');
}

function App() {
  return (
    <div className="App">
      
      <Cabecalho titulo='Teste Gótico' />

      {/* Sessão do Input */}
      <div className="sessao-interativa">
        <p className="texto-sombrio">Ao escrever, a magia desperta (Notificação)</p>
        
        <div className="input-container">
          <img src="/assets/img/image copy 2.png" alt="Sigilo" className="icone-input" />
          <input 
            type='text' 
            placeholder='Digite seu feitiço...' 
            onChange={Alterou} 
            className="input-gotico"
          />
          <img src="/assets/img/image copy 3.png" alt="Sigilo" className="icone-input" />
        </div>
      </div>

      {/* Sessão da Água (Transformada em Orbe Mágica) */}
      <div className="sessao-interativa delay-animacao">
        <p className="texto-sombrio">Passe o mouse para invocar (Notificação)</p>
        
        <div className='agua' onMouseMove={passou}>
          <img src="/assets/img/image.png" alt="Espiral" className="espiral-interna" />
          <span>Água</span>
        </div>
      </div>

      <Links />

    </div>
  );
}

export default App;
