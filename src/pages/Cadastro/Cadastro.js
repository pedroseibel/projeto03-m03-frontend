import React from 'react'
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value; 
    const especie = evento.target.especie.value;
    const continente = evento.target.continente.value;
    const distribuicaoGeografica = evento.target.distribuicaoGeografica.value;
    const habitat = evento.target.habitat.value;
    const estadoConservacao = evento.target.estadoConservacao.value;

    const vaga = {
      nome,
      especie,
      continente,
      distribuicaoGeografica,
      habitat,
      estadoConservacao
    }
    
    try {
      const response = await Api.fetchPost(vaga)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Animais</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="nome" id="floatingInput" placeholder="Digite o nome"/>
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="especie" id="floatingInput" placeholder="Digite o nome"/>
                  <label htmlFor="floatingInput">Espécie</label>
                </div>
              </div>
            </div>
              <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="continente" id="floatingInput" placeholder="Digite o nome"/>
                  <label htmlFor="floatingInput">Continente</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="distribuicaoGeografica" id="floatingInput" placeholder="Digite o nome"/>
                  <label htmlFor="floatingInput">Distribuicão Geográfica</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="habitat" id="floatingInput" placeholder="Digite o nome"/>
                  <label htmlFor="floatingInput">Habitat</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="estadoConservacao" id="floatingInput" placeholder="Digite o nome"/>
                  <label htmlFor="floatingInput">Estado de Conservação</label>
                </div>
              </div>
            </div>
              
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
