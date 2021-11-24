import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  // criacao do estado
  const [vaga, setVaga] = useState({});

  // o use effect chama a funcao getById que retorna o objeto do backend de acordo com o id
  useEffect(() => {
    getVagaById();
  }, []);

  const getVagaById = async () => {
    // faz uma chamada para api para pegar o objeto de acordo com o id.
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    // atualizo o meu estado de acordo com o resultado.
    setVaga(result);
    console.log(_id)
  };

  const handleFieldsChange = (event) => {
    // clono meu objeto do estado
    const campos = { ...vaga };
    // para cada input eu atualizo o seu respectivo valor no obj
    campos[event.target.name] = event.target.value;

    // atualizo o meu estado com esse novo objeto.
    setVaga(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // faco uma copia do estado com obj atualizado.
    const vagaObj = { ...vaga };
    try {
      const response = await Api.fetchPut(vagaObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/"); // forca o historico a voltar para a rota de / => home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Editar</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.nome}
                    className="form-control"
                    name="nome"
                    id="floatingInput"
                    placeholder="Digite o nome"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>

              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.especie}
                    className="form-control"
                    name="especie"
                    id="floatingInput"
                    placeholder="Digite o nome"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Espécie</label>
                </div>
              </div>
            </div>

            <div className="row">
              
            <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.continente}
                    className="form-control"
                    name="continente"
                    id="floatingInput"
                    placeholder="Digite o continente"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Continente</label>
                </div>
              </div>

              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.distribuicaoGeografica}
                    className="form-control"
                    name="distribuicaoGeografica"
                    id="floatingInput"
                    placeholder="Digite a distribuicão geografica"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Distribuicão Geográfica</label>
                </div>
              </div>
            </div>

            <div className="row">
            <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.habitat}
                    className="form-control"
                    name="habitat"
                    id="floatingInput"
                    placeholder="Digite o habitat"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Habitat</label>
                </div>
              </div>

              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.estadoConservacao}
                    className="form-control"
                    name="estadoConservacao"
                    id="floatingInput"
                    placeholder="Digite o estado de conservacão"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Estado Conservação</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;
