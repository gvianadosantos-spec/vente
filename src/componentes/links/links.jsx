import './links.scss';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <div className='botoes-container'>
      <Link to={'../'} className='btn-link'>
        <img src="/assets/img/image.png" alt="Início" className="icone-sigilo espiral" />
        ir para inicio
      </Link>
      
      <Link to={'../contador'} className='btn-link'>
        <img src="/assets/img/image copy 2.png" alt="Contador" className="icone-sigilo" />
        ir para contador
      </Link>
      
      <Link to={'../input'} className='btn-link'>
        <img src="/assets/img/image copy 3.png" alt="Input" className="icone-sigilo" />
        ir para input
      </Link>
      
      <Link to={'../cadastro'} className='btn-link'>
        <img src="/assets/img/image copy 4.png" alt="Cadastro" className="icone-sigilo" />
        ir para cadastro
      </Link>
      
      <Link to={'../calculadora'} className='btn-link'>
        <img src="/assets/img/image copy.png" alt="Calculadora" className="icone-sigilo" />
        ir para calculadora
      </Link>
      
      <Link to={'../buscacep'} className='btn-link'>
        <img src="/assets/img/image copy 2.png" alt="Busca CEP" className="icone-sigilo" />
        ir para buscar cep
      </Link>
      
      <Link to={'../ingresso'} className='btn-link'>
        <img src="/assets/img/image copy 3.png" alt="Ingresso" className="icone-sigilo" />
        ir para buscar ingresso
      </Link>
    </div>
  );
}

export default Links;