import styles from './FormMVS.module.css';
import { useState } from 'react';

import BlocoCabecalho from '../Blocos/BlocoCabecalho';
import BlocoDadosPessoais from '../Blocos/BlocoDadosPessoais';
import BlocoB from '../Blocos/BlocoB';
import BlocoC from '../Blocos/BlocoC';
import BlocoIntencaoAtividade from '../Blocos/BlocoIntencaoAtividade';
import BlocoSegurancaAlimentar from '../Blocos/BlocoSegurancaAlimentar';
import BlocoValorizacaoConhecimentoEcologico from '../Blocos/BlocoValorizacaoConhecimentoEcologico';
import BlocoAcessoNovosConhecimentos from '../Blocos/BlocoAcessoNovosConhecimentos';
import BlocoSatisfacaoTrabalho from '../Blocos/BlocoSatisfacaoTrabalho';
import BlocoSegurancaTrabalho from '../Blocos/BlocoSegurancaTrabalho';
import BlocoRelacaoParceirosInstituicoes from '../Blocos/BlocoRelacaoParceirosInstituicoes';
import BlocoVisibilidadeJovem from '../Blocos/BlocoVisibilidadeJovem';
import BlocoParticipacaoMulher from '../Blocos/BlocoParticipacaoMulher';
import BlocoDimensaoAmbiental from '../Blocos/BlocoDimensaoAmbiental';
import BlocoConservacaoDaFloresta from '../Blocos/BlocoConservacaoDaFloresta';
import BlocoConservacaoManejoFaunaSilvestre from '../Blocos/BlocoConservacaoManejoFaunaSilvestre';
import BlocoDimensaoFisica from '../Blocos/BlocoDimensaoFisica';
import BlocoInfraestruturaColetivaProducao from '../Blocos/BlocoInfraestruturaColetivaProducao';
import BlocoInfraestruturaIndividualFamiliar from '../Blocos/BlocoInfraestruturaIndividualFamiliar';
import BlocoDimensaoFinanceira from '../Blocos/BlocoDimensaoFinanceira';
import BlocoPrecoProdutos from '../Blocos/BlocoPrecoProdutos';
import BlocoComercializacao from '../Blocos/BlocoComercializacao';
import BlocoAcessoLinhasCredito from '../Blocos/BlocoAcessoLinhasCredito';
import Button from '../Button';
import { reagruparDados } from '@/utils/js/functionPadroes';

export default function FormaMVS() {

    const [dadosCabecalho, setDadosCabecalho] = useState({});
    const [dadosPessoais, setDadosPessoais] = useState({});
    const [B, setB] = useState({});
    const [C, setC] = useState({});
    const [intencaoAtividade, setIntencao] = useState({});
    const [segurancaAlimentar, setSegurancaAlimentar] = useState({});
    const [valorizacaoConhecimentoEcologico, setValorizacao] = useState({});
    const [acessoNovosConhecimentos, setAcessoNovosConhecimentos] = useState({});
    const [satisfacaoTrabalho, setSatisfacaoTrabalho] = useState({});
    const [segurancaTrabalho, setSegurancaTrabalho] = useState({});
    const [relacaoParceirosInstitucoes, setRelacao] = useState({});
    const [visibilidadeJovem, setVisibilidade] = useState({});
    const [participacaoMulher, setParticipacaoMulher] = useState({});
    const [dimensaoAmbiental, setDimensaoAmbiental] = useState({});
    const [consevacaoDaFloresta, setConservacaoDaFloresta] = useState({});
    const [conservacaoManejoFloraSilvestre, setConservacaoManejoFloraSilvestre] = useState({});
    const [dimensaoFisica, setDimensaoFisica] = useState({})
    const [infraestruturaColetivaProducao, setinfraestruturaColetivaProducao] = useState({});
    const [infraestruturaIndivisualFamiliar, setInfraestruturaIndividualFamiliar] = useState({});
    const [dimensaoFinanceira, setDimensaoFinanceira] = useState({});
    const [precoProdutos, setPrecoProdutos] = useState({});
    const [comercializacao, setComercializacao] = useState({});
    const [acessoLinhasCredito, setAcessoLinhasCredito] = useState({});

    const enviar = (e) => {
        e.preventDefault();
        const dadosAgrupados = reagruparDados(
            dadosCabecalho,
            dadosPessoais,
            B,
            C,
            intencaoAtividade,
            segurancaAlimentar,
            valorizacaoConhecimentoEcologico,
            acessoNovosConhecimentos,
            satisfacaoTrabalho,
            segurancaTrabalho,
            relacaoParceirosInstitucoes,
            visibilidadeJovem,
            participacaoMulher,
            dimensaoAmbiental,
            consevacaoDaFloresta,
            conservacaoManejoFloraSilvestre,
            dimensaoFisica,
            infraestruturaColetivaProducao,
            infraestruturaIndivisualFamiliar,
            dimensaoFinanceira,
            precoProdutos,
            comercializacao,
            acessoLinhasCredito
        )
        console.log(dimensaoFinanceira, precoProdutos, comercializacao, acessoLinhasCredito)

    }

    return (
        <>
            <form className={styles.formulario}>
                <BlocoCabecalho setDadosCabecalho={setDadosCabecalho} />

                <BlocoDadosPessoais setDadosPessoais={setDadosPessoais} />

                <BlocoB setDados={setB} />

                <BlocoC setDados={setC} />

                <BlocoIntencaoAtividade setDados={setIntencao} />

                <h1>Meios de Vida Sustentáveis</h1>

                <BlocoSegurancaAlimentar setDados={setSegurancaAlimentar} />

                <BlocoValorizacaoConhecimentoEcologico setDados={setValorizacao} />

                <BlocoAcessoNovosConhecimentos setDados={setAcessoNovosConhecimentos} />

                <BlocoSatisfacaoTrabalho setDados={setSatisfacaoTrabalho} />

                <BlocoSegurancaTrabalho setDados={setSegurancaTrabalho} />

                <BlocoRelacaoParceirosInstituicoes setDados={setRelacao} />

                <BlocoVisibilidadeJovem setDados={setVisibilidade} />

                <BlocoParticipacaoMulher setDados={setParticipacaoMulher} />

                <BlocoDimensaoAmbiental setDados={setDimensaoAmbiental} />

                <BlocoConservacaoDaFloresta setDados={setConservacaoDaFloresta} />

                <BlocoConservacaoManejoFaunaSilvestre setDados={setConservacaoManejoFloraSilvestre} />

                <BlocoDimensaoFisica setDados={setDimensaoFisica} />

                <BlocoInfraestruturaColetivaProducao setDados={setinfraestruturaColetivaProducao} />

                <BlocoInfraestruturaIndividualFamiliar setDados={setInfraestruturaIndividualFamiliar} />

                <BlocoDimensaoFinanceira setDados={setDimensaoFinanceira} />

                <BlocoPrecoProdutos setDados={setPrecoProdutos} />

                <BlocoComercializacao setDados={setComercializacao} />

                <BlocoAcessoLinhasCredito setDados={setAcessoLinhasCredito} />

                <Button text={'enviar'} onClick={enviar} />
            </form>
        </>
    )
}