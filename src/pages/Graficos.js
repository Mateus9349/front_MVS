import { useState, useEffect } from "react";
import SectionBuscarMVS from "./components/SectionBuscarMVS";
import SectionGraficos from "./components/SectionGraficos";
import NavBar from "./components/NavBar";
import CardMVSGraf from "./components/CardMVSGraf";
import { filtrarObjetosPorData } from "@/utils/js/functionPadroes";
import SectionGraFicos from "./components/SectionGraficos";
import http from "./components/HTTP";
import { getDados } from "@/utils/js/enviarCSV";

export default function Graficos() {
    const [dados, setDados] = useState([]);

    const [data, setData] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [showGraf, setShowGraf] = useState(false);

    const [dimensaoHumanaC, setDimensaoHumana] = useState({});
    const [dimensaoSocialC, setDimensaoSocial] = useState({});
    const [dimensaoAmbientalC, setDimensaoAmbiental] = useState({});
    const [dimensaoFisicaC, setDimensaoFisica] = useState({});
    const [dimensaoFinanceiraC, setDimensaoFinanceira] = useState({});

    const buscarDados = async () => {
        setDados(filtrarObjetosPorData(dados, data, dataFinal));
    };

    const select = async (id) => {
        try {
            const humana = await getDados(`dhumanas/${id}`);
            const social = await getDados(`dsociais/${id}`);
            const ambiental = await getDados(`dambientais/${id}`);
            const fisica = await getDados(`dfisicas/${id}`);
            const financeira = await getDados(`dfinanceiras/${id}`);

            setDimensaoHumana([humana.h1, humana.h2, humana.h3, humana.h4, humana.h5]);
            setDimensaoSocial([social.s1, social.s2, social.s3]);
            setDimensaoAmbiental([ambiental.a1, ambiental.a2, ambiental.a3]);
            setDimensaoFisica([fisica.p1, fisica.p2, fisica.p3]);
            setDimensaoFinanceira([financeira.f1, financeira.f2, financeira.f3, financeira.f4]);

            setShowGraf(true)
        } catch (error) {
            console.log(error);
        }
    };

    const excluir = async (id) => {
        try {
            await http.delete(`dsociais/${id}`);
            await http.delete(`dambientais/${id}`);
            await http.delete(`dfisicas/${id}`);
            await http.delete(`dfinanceiras/${id}`);
            await http.delete(`dhumanas/${id}`);

            carregarDados();
        } catch (error) {
            console.log(error);
        }
    }

    const carregarDados = async () => {
        try {
            const dados = await getDados('dhumanas');
            setDados(dados);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    };

    useEffect(() => {
        carregarDados();
    }, [data, dataFinal]);

    return (
        <main>
            <NavBar />
            <SectionBuscarMVS
                onChange={(e) => setData(e.target.value)}
                onChange2={(e) => setDataFinal(e.target.value)}
                onClick={buscarDados}
            />

            {showGraf && <SectionGraFicos
                humana={dimensaoHumanaC}
                ambiental={dimensaoAmbientalC}
                social={dimensaoSocialC}
                fisica={dimensaoFisicaC}
                financeira={dimensaoFinanceiraC}
            />}

            <CardMVSGraf
                dados={dados}
                onClick={(id) => select(id)}
                excluir={(id) => excluir(id)}
            />
        </main>
    );
}
