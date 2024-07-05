import { useState } from 'react';
import Papa from 'papaparse';
import Button from './components/Button';

import http from './components/HTTP';

import {
    dimensaoHumana,
    dimensaoAmbiental,
    dimensaoSocial,
    dimensaoFisica,
    dimensaoFinanceira
} from '@/utils/js/ordenaDados';

import styles from '../styles/MVS.module.scss';
import FormMVS from './components/FormMVS';
import SectionGraFicos from './components/SectionGraficos';
import NavBar from './components/NavBar';
import { enviarAmbiental, enviarFinanceira, enviarFisica, enviarHumana, enviarSocial } from '@/utils/js/enviarCSV';

export default function MVS() {
    const [dados, setDados] = useState([]);

    const [verForm, setVerform] = useState(false);
    const [verGraf, setVerGrafico] = useState(false);

    const [dimensaoHumanaC, setDimensaoHumana] = useState({});
    const [dimensaoSocialC, setDimensaoSocial] = useState({});
    const [dimensaoAmbientalC, setDimensaoAmbiental] = useState({});
    const [dimensaoFisicaC, setDimensaoFisica] = useState({});
    const [dimensaoFinanceiraC, setDimensaoFinanceira] = useState({});

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
                        const dadosFiltrados = result.data.filter((linha) => linha.IdentificadorEntrevista !== null);

                        setDimensaoHumana(dimensaoHumana(dadosFiltrados));
                        setDimensaoSocial(dimensaoSocial(dadosFiltrados));
                        setDimensaoAmbiental(dimensaoAmbiental(dadosFiltrados));
                        setDimensaoFisica(dimensaoFisica(dadosFiltrados));
                        setDimensaoFinanceira(dimensaoFinanceira(dadosFiltrados));

                        setDados(dadosFiltrados);
                        console.log(dadosFiltrados);
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


    const enviar = async () => {
        await enviarHumana(dimensaoHumanaC);
        await enviarAmbiental(dimensaoAmbientalC);
        await enviarSocial(dimensaoSocialC);
        await enviarFisica(dimensaoFisicaC);
        await enviarFinanceira(dimensaoFinanceiraC);

        window.location.reload();
    }


    const verGrafico = () => {
        setVerGrafico(!verGraf)
    }

    return (
        <>
            <NavBar />

            <main>
                <div className={styles.container}>
                    <div className={styles.lerDados}>
                        <h3>Ler dados do arquivo CSV</h3>

                        <label>Arquivo: </label>
                        {/* Permitir o usuário selecionar somente arquivo CSV e chamar a função quando selecionar o arquivo */}
                        <input type='file' accept='.csv' onChange={lerDadosArquivo} />
                        <br /><br />
                    </div>


                    {dados.length !== 0 ?
                        <div className={styles.buttons}>
                            <Button text={'Ver Gráficos'} onClick={verGrafico} />
                            {/* <Button text={'Ver formulario'} onClick={() => setVerform(!verForm)} /> */}
                            <Button text={'Enviar'} onClick={enviar} />
                            <br /><br />
                        </div>
                        : ''}


                    {dados.length !== 0 && verGraf ?
                        <SectionGraFicos
                            humana={dimensaoHumanaC}
                            ambiental={dimensaoAmbientalC}
                            social={dimensaoSocialC}
                            fisica={dimensaoFisicaC}
                            financeira={dimensaoFinanceiraC}
                        />
                        : ''}


                    <table className={styles.tabela}>
                        <thead>
                            <tr>
                                {dados.length > 0 && Object.keys(dados[0]).map((propriedade, index) => (
                                    <th key={index}>{propriedade}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {dados.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.keys(row).map((key, colIndex) => (
                                        <td key={colIndex}>{row[key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {verForm ? <FormMVS /> : ''}
            </main >
        </>
    )
}