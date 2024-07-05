import { calcularMedia, verificaSimNao } from "./functionPadroes";

export function calcH1(dados) {
    const alimentacao = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5'];

    for (const item of dados) {
        const aux = calcularPerguntasAlimentacao(item);
        perguntas.forEach((pergunta, index) => {
            alimentacao[index] = alimentacao[index] || [];
            alimentacao[index].push(aux[pergunta]);
        });
    }

    const mediaAlimentacao = alimentacao.map(array => calcularMedia(array));
    const media = calcularMedia(mediaAlimentacao);

    return media;
}

function calcularPerguntasAlimentacao(dados) {
    return {
        a1: calcularMediaAlimentacao(dados),
        a2: verificaSimNao(dados.Voc_gasta_dinheiro_para_compr),
        a3: verificaSimNao(dados.Voc_acha_que_tem_ac_imentos_de_qualidade),
        a4: verificaSimNao(dados.Voc_usa_o_dinheiro_bem_estar_alimentar),
        a5: verificaSimNao(dados.O_Projeto_Cidades_Fl_nta_o_de_algum_forma)
    };
}

function calcularMediaAlimentacao(dados) {
    const col1 = dados.group_fh8hw91_aliment_1_coluna;
    const col2 = dados.group_fh8hw91_aliment2_coluna;
    const col3 = dados.group_fh8hw91_aliment_3_coluna;
    const mediaCol = (1 * Number(col1) + 0.5 * Number(col2) + 0 * Number(col3)) / 100;
    return mediaCol;
}

///////////////////////////////////// H2 ////////////////////////////////////////////////////

export function calcH2(dados) {
    const conhecimentoEcologico = [];
    const perguntas = ['a1', 'a2'];

    for (const item of dados) {
        const aux = calcularPerguntasEcologico(item);
        perguntas.forEach((pergunta, index) => {
            conhecimentoEcologico[index] = conhecimentoEcologico[index] || [];
            conhecimentoEcologico[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = conhecimentoEcologico.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasEcologico(obj){
    return {
        a1: verificaSimNao(obj.Voc_usa_estes_conhe_dia_do_seu_trabalho),
        a2: verificaSimNao(obj.Voc_est_passando_esses_conhe)
    };
}

//-------------------------------------- H3 ---------------------------------------------//

export function calcH3(dados) {
    const conhecimentoTecnico = [];
    const perguntas = ['a1', 'a2'];

    for (const item of dados) {
        const aux = calcularPerguntasTecnico(item);
        perguntas.forEach((pergunta, index) => {
            conhecimentoTecnico[index] = conhecimentoTecnico[index] || [];
            conhecimentoTecnico[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = conhecimentoTecnico.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasTecnico(obj){
    return {
        a1: verificaSimNao(obj.Voc_j_recebeu_assist_ncia_t_),
        a2: verificaSimNao(obj.Voc_tem_feito_na_pr_tica_alg)
    };
}

//---------------------------------------- H4 -------------------------------------------------//

export function calcH4(dados) {
    const satisfacaoTrabalho = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];

    for (const item of dados) {
        const aux = calcularPerguntasSatisfacaoTrabalho(item);
        perguntas.forEach((pergunta, index) => {
            satisfacaoTrabalho[index] = satisfacaoTrabalho[index] || [];
            satisfacaoTrabalho[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = satisfacaoTrabalho.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasSatisfacaoTrabalho(obj){
    return {
        a1: verificaSimNao(obj.Voc_est_satisfeito_lugar_onde_trabalha),
        a2: verificaSimNao(obj.Voc_est_satisfeito_e_ou_leos_te_trouxe),
        a3: verificaSimNao(obj.Voc_est_satisfeito_balham_junto_com_voc),
        a4: verificaSimNao(obj.Voc_se_sente_reconh_e_madeira_e_ou_leos),
        a5: verificaSimNao(obj.Voc_acha_que_o_trabalho_com_o),
        a6: verificaSimNao(obj.O_Projeto_plano_de_Manejo_e_u)
    };
}

//----------------------------- H5 ----------------------------------//

export function calcH5(dados) {
    const segurancaTrabalho = [];
    const perguntas = ['a1', 'a2', 'a3'];

    for (const item of dados) {
        const aux = calcularPerguntasSegurancaTrabalho(item);
        perguntas.forEach((pergunta, index) => {
            segurancaTrabalho[index] = segurancaTrabalho[index] || [];
            segurancaTrabalho[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = segurancaTrabalho.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasSegurancaTrabalho(obj){
    return {
        a1: verificaSimNao(obj.Existem_riscos_perigos_no_seu_),
        a2: verificaSimNao(obj.Voc_j_fez_algum_treinamento_),
        a3: verificaSimNao(obj.Voc_utiliza_alguma_vestimenta),
    };
}