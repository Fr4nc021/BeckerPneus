import './App.css'

function EmProducao() {
  const handleVoltar = () => {
    window.location.hash = ''
    window.location.reload()
  }

  return (
    <div className="em-producao-page">
      <div className="em-producao-content">
        <h1 className="em-producao-title">Ainda em Produção</h1>
        <p className="em-producao-text">Estamos trabalhando para trazer o melhor conteúdo para você!</p>
        <a href="#" onClick={(e) => { e.preventDefault(); handleVoltar(); }} className="btn-primary em-producao-btn">Voltar ao Início</a>
      </div>
    </div>
  )
}

export default EmProducao

