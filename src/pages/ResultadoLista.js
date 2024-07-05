import { useEffect, useState } from "react";
import Filtros from "./components/Filtros";
import NavBar from "./components/NavBar";
import { getDados } from "@/utils/js/enviarCSV";
import CardResultadoLista from "./components/CardResultadoLista";
import { extrairDataSeparada } from "@/utils/js/functionPadroes";

export default function ResultadoLista() {
    const [dadosListas, setDadosListas] = useState([]);
    const [mes, setMes] = useState(0);
    const [ano, setAno] = useState(0);
    const [associacao, setAssociacao] = useState('');

    const [contagem, setContagem] = useState({});

    const carregarDados = async () => {
        try {
            const dados = await getDados('lista');
            setDadosListas(dados);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    };

    const filtrar = (e) => {
        const { name, value } = e.target;
        if (name === 'ano') setAno(value);
        if (name === 'mes') setMes(value);
        if (name === 'associacao') setAssociacao(value);
    };

    const processarParticipantes = (dados) => {
        const cpfsUnicos = new Set();
        const contagem = {
            totalParticipantes: 0,
            mulheres: 0,
            jovens: 0,
            associacoes: new Set()
        };

        dados.forEach(participante => {
            if (!cpfsUnicos.has(participante.cpf)) {
                cpfsUnicos.add(participante.cpf);
                contagem.totalParticipantes++;

                if (participante.genero === 'F') {
                    contagem.mulheres++;
                }

                if (participante.jovem === 'jovem') {
                    contagem.jovens++;
                }

                contagem.associacoes.add(participante.organizacao);
            }
        });

        return {
            totalParticipantes: contagem.totalParticipantes,
            mulheres: contagem.mulheres,
            jovens: contagem.jovens,
            associacoes: contagem.associacoes.size
        };
    };

    const buscar = async (tipoDeBusca) => {
        if (tipoDeBusca === 'ano') {
            await ordenaPorAno();
        } else if (tipoDeBusca === 'mes') {
            await ordenaPorMesAano();
        } else if (tipoDeBusca === 'associacao') {
            await ordenaPorAssociacao();
        } else {
            alert('busca invalida!');
        }
    };

    const ordenaPorAno = async () => {
        const acoes = await getDados('acao');
        let acoesFiltradas = [];

        // Filtrar acoes pelo ano
        acoes.forEach((item) => {
            let data = extrairDataSeparada(item.data_inicio);
            if (ano == data.ano) {
                acoesFiltradas.push(item);
            }
        });

        // Comparar acoesFiltradas com dadosLista
        let resultadoFinal = [];
        acoesFiltradas.forEach((acao) => {
            dadosListas.forEach((dado) => {
                if (dado.acao_id === acao.id) {
                    resultadoFinal.push(dado);
                }
            });
        });

        setContagem(processarParticipantes(resultadoFinal));
    };

    const ordenaPorMesAano = async () => {
        const acoes = await getDados('acao');
        let acoesFiltradas = [];

        // Filtrar acoes pelo ano e mês
        acoes.forEach((item) => {
            let data = extrairDataSeparada(item.data_inicio);
            if (ano == data.ano && mes == data.mes) {
                acoesFiltradas.push(item);
            }
        });

        // Comparar acoesFiltradas com dadosLista
        let resultadoFinal = [];
        acoesFiltradas.forEach((acao) => {
            dadosListas.forEach((dado) => {
                if (dado.acao_id === acao.id) {
                    resultadoFinal.push(dado);
                }
            });
        });

        setContagem(processarParticipantes(resultadoFinal));
    };

    const ordenaPorAssociacao = async () => {
        const acoes = await getDados('acao');
        let acoesFiltradas = [];

        // Filtrar acoes pela associacao
        acoes.forEach((item) => {
            if (associacao && item.associacao && item.associacao.includes(associacao)) {
                acoesFiltradas.push(item);
            }
        });

        // Comparar acoesFiltradas com dadosLista
        let resultadoFinal = [];
        acoesFiltradas.forEach((acao) => {
            dadosListas.forEach((dado) => {
                if (dado.acao_id === acao.id) {
                    resultadoFinal.push(dado);
                }
            });
        });

        setContagem(processarParticipantes(resultadoFinal));
    };

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <>
            <NavBar />
            <Filtros onChange={filtrar} onClick={buscar} />
            <CardResultadoLista
                participantes={contagem.totalParticipantes}
                mulheres={contagem.mulheres}
                jovens={contagem.jovens}
                associacoes={contagem.associacoes}
            />
        </>
    );
}
