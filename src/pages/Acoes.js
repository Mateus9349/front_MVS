import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import CardAcao from "./components/CardAcao";
import { getDados } from "@/utils/js/enviarCSV";

export default function Acoes() {
    const [acoes, setAcoes] = useState([]);

    const carregarDados = async () => {
        try {
            const dados = await getDados('acao');
            setAcoes(dados);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    };

    useEffect(() => {
        carregarDados();
    }, []);

    return(
        <main>
            <NavBar />

            <CardAcao acoes={acoes} />
        </main>
    )
}