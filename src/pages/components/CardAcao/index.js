import { useEffect, useState } from "react";
import Button from "../Button";
import CardConfirm from "../CardConfirm";
import { getDados } from "@/utils/js/enviarCSV";
import http from "../HTTP";
import styles from './CardAcao.module.scss';


export default function CardAcao({ acoes }) {
    const [selectList, setSelectList] = useState(false);

    const [dadosAcao, setDadosAcao] = useState({});
    const [list, setList] = useState([]);

    const showList = async (id) => {
        try {
            const dados = await getDados('lista');
            const acao = await getDados(`acao/${id}`);
            const lista = dados.filter(item => item.acao_id === id);
            console.log(lista)

            setDadosAcao(acao);
            setList(lista);
            setSelectList(true);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    }

    const confirmar = () => {
        setSelectList(false);
    }

    const cancelar = () => {
        setSelectList(false);
    }

    const excluir = async (id) => {
        const dados = await getDados('lista');
        const lista = dados.filter(item => item.acao_id === id);
        lista.forEach(async (element) => {
            await http.delete(`lista/${element.id}`);
        });

        await http.delete(`acao/${id}`);
        window.location.reload();
    }



    return (
        <section className={styles.container}>
            {acoes.map(item => (
                <div className={styles.card} key={item.id}>
                    <h1 className={styles.acao}>Ação: <span>{item.acao}</span></h1>
                    <h2 className={styles.projeto}>Projeto: <span>{item.projeto}</span></h2>
                    <h3 className={styles.associacao}>Associação: <span>{item.associacao}</span></h3>
                    <h3 className={styles.data}>inicio: <span>{item.data_inicio}</span> fim: <span>{item.data_fim}</span></h3>
                    <div className={styles.btns}>
                        <Button
                            text={'ver lista'}
                            onClick={() => showList(item.id)}
                        />
                        <Button
                            text={'excluir'}
                            initialModo={true}
                            onClick={() => excluir(item.id)}
                        />
                    </div>

                    {selectList && <CardConfirm
                        dadosAcao={dadosAcao}
                        dados={list}
                        confirmar={confirmar}
                        cancelar={cancelar}
                    />}
                </div>
            ))}
        </section>
    )
}