import './cabecalho.scss';

export default function Cabecalho(props) {
  return (
    <div className='comp-cabecalho'>
      {/* Sigilo da Esquerda */}
      <img 
        src="/assets/img/image copy 4.png" 
        alt="Sigilo Esquerdo" 
        className="icone-sigilo" 
      />
      
      <h1>
        {props.titulo ?? 'exercicios'}
      </h1>

      {/* Sigilo da Direita (com animação extra de rotação) */}
      <img 
        src="/assets/img/image.png" 
        alt="Sigilo Direito" 
        className="icone-sigilo espiral" 
      />
    </div>
  )
}