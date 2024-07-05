import { useState } from 'react';
import Papa from 'papaparse';
import Button from './components/Button';
import CardConfirm from './components/CardConfirm';
import http from './components/HTTP';
import NavBar from './components/NavBar';
import styles from '../styles/Lista.module.scss';

export default function Lista() {

  // Criar a variável para receber os dados
  const [nomeTecnico, setNomeTecnico] = useState('');
  const [nomeAcao, setNomeAcao] = useState("");
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [associacao, setAssociacao] = useState('');
  const [territorio, setTerritorio] = useState('');
  const [codAtividade, setCod] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const [dadosAcao, setDadosAcao] = useState({});
  const [dados, setDados] = useState([]);

  const [clicado, setClick] = useState(false);

  // Função para ler os dados do CSV
  const lerDadosArquivo = (e) => {
    try {
      const arquivo = e.target.files[0];

      if (arquivo) {
        Papa.parse(arquivo, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            // Filtrar linhas em branco ou nulas
            const dadosFiltrados = result.data.filter((linha) => linha.nome !== null);

            setDados(dadosFiltrados);

            const dadosDaAcao = {
              tecnico: nomeTecnico,
              acao: nomeAcao,
              projeto: nomeProjeto,
              codigo: codAtividade,
              associacao: associacao,
              territorio: territorio,
              data_inicio: dataInicio,
              data_fim: dataFim
            }
            setDadosAcao(dadosDaAcao);
          },
          error: (error) => {
            console.error('Erro ao analisar o CSV:', error.message);
            alert('Erro ao analisar o CSV. Verifique o formato do arquivo.');
          },
        });
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      alert('Ocorreu um erro inesperado durante a leitura do arquivo.');
    }
  };


  const enviar = () => {
    setClick(true);
  }

  const confirmar = async () => {
    const dadosDaAcao = {
      tecnico: nomeTecnico,
      acao: nomeAcao,
      projeto: nomeProjeto,
      codigo: codAtividade,
      associacao: associacao,
      territorio: territorio,
      data_inicio: dataInicio,
      data_fim: dataFim
    }

    try {
      const respostaAcao = await http.post('acao', dadosDaAcao);
      const acaoId = respostaAcao.data.id;

      await criaLista(acaoId);
      setClick(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }

    async function criaLista(acaoId) {
      dados.map(async (item) => {
        let dadosLista = {
          nome: item.nome,
          genero: item.genero,
          idade: item.idade,
          jovem: item.jovem,
          organizacao: item.organizacao,
          cpf: item.cpf,
          acao_id: acaoId
        }

        try {
          const respostaLista = await http.post('lista', dadosLista);
          console.log(respostaLista.data);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }


  const cancelar = () => {
    setClick(false)
  }

  return (
    <>
      <NavBar />

      <main className={styles.container}>
        <section className={styles.containerDadosAtividade}>
          <form>
            <fieldset>
              <legend>Dados Gerais da Atividade</legend><br />

              <label>Data de inicio: </label>
              <input className={styles.data} type='date' required onChange={(e) => setDataInicio(e.target.value)} />

              <br /><br />

              <label>Data do fim: </label>
              <input className={styles.data} type='date' required onChange={(e) => setDataFim(e.target.value)} />

              <br /><br />

              <label>Nome do técnico responsável: </label>
              <input type='text' required onChange={(e) => setNomeTecnico(e.target.value)} />

              <br /><br />

              <label>Nome da ação: </label>
              <input type='text' required onChange={(e) => { setNomeAcao(e.target.value) }} />

              <br /><br />

              <label>Nome do projeto: </label>
              <input type='text' required onChange={(e) => { setNomeProjeto(e.target.value) }} />

              <br /><br />

              <label>Código da atividade: </label>
              <input type='text' required onChange={(e) => setCod(e.target.value)} />

              <br /><br />

              <label>Nome da associação: </label>
              <input type='text' required onChange={(e) => { setAssociacao(e.target.value) }} />

              <br /><br />

              <label>Territorio: </label>
              <select value={territorio} onChange={(e) => setTerritorio(e.target.value)}>
                <option value=''>Selecione</option>
                <option value='Rural'>Rural</option>
                <option value='Assentamento'>Assentamento</option>
                <option value='Urbano'>Urbano</option>
                <option value='Unidade de Consevação'>Unidade de Conservação</option>
              </select>
            </fieldset>
          </form>
        </section>

        <div className={styles.containerArquivo}>
          <h3 className={styles.title}>Ler dados do arquivo CSV</h3>

          <div className={styles.divArquivo}>
            <label className={styles.labelArquivo}>Arquivo: </label>
            {/* Permitir o usuário selecionar somente arquivo CSV e chamar a função quando selecionar o arquivo */}
            <input className={styles.inputArquivo} type='file' accept='.csv' onChange={lerDadosArquivo} /><br /><br />
          </div>

          <Button text={'Enviar'} onClick={enviar} /><br /><br />

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Gênero</th>
                <th>Idade</th>
                <th>Jovem</th>
                <th>Organização</th>
                <th>CPF</th>
              </tr>
            </thead>
            <tbody>
              {/* Percorrer a lista de registros */}
              {dados.map((row, index) => (
                <tr key={index}>
                  <td>{row.nome}</td>
                  <td>{row.genero}</td>
                  <td>{row.idade}</td>
                  <td>{row.jovem}</td>
                  <td>{row.organizacao}</td>
                  <td>{row.cpf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {clicado ?
          <CardConfirm
            dadosAcao={dadosAcao}
            dados={dados}
            confirmar={confirmar}
            cancelar={cancelar}
          />
          : ''}

      </main>
    </>
  )
}
