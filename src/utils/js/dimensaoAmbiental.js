import { calcularMedia, verificaSimNao } from "./functionPadroes";

///////////////////////////////////// A1 ////////////////////////////////////////////////////

export function calcA1(dados) {
    const materiais = [];
    const perguntas = ['a1', 'a2', 'a3'];

    for (const item of dados) {
        const aux = calcularPerguntasMateriais(item);
        perguntas.forEach((pergunta, index) => {
            materiais[index] = materiais[index] || [];
            materiais[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = materiais.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasMateriais(obj){
    return {
        a1: verificaSimNao(obj.Os_materiais_utiliza_o_comprados_de_fora),
        a2: verificaSimNao(obj.Existe_algum_per_odo_do_ano_em),
        a3: verificaSimNao(obj.Sua_atividade_no_man_dade_de_outra_pessoa)
    };
}

//-------------------------------------- A2 ---------------------------------------------//

export function calcA2(dados) {
    const conservacao = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5'];

    for (const item of dados) {
        const aux = calcularPerguntasConservacao(item);
        perguntas.forEach((pergunta, index) => {
            conservacao[index] = conservacao[index] || [];
            conservacao[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = conservacao.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasConservacao(obj){
    return {
        a1: verificaSimNao(obj.Com_o_passar_do_temp_egi_o_a_floresta_est),
        a2: verificaSimNao(obj.Voc_acha_que_a_sua_atividade_),
        a3: verificaSimNao(obj.Voc_acha_que_a_sua_atividade__001),
        a4: verificaSimNao(obj.Voc_utiliza_alguma_esp_cie_de),
        a5: verificaSimNao(obj.A_disponibilidade_de_em_ao_longo_do_tempo)
    };
}

//---------------------------------------- A3 -------------------------------------------------//

export function calcA3(dados) {
    const conservacaoFauna = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4'];

    for (const item of dados) {
        const aux = calcularPerguntasConservacaoFauna(item);
        perguntas.forEach((pergunta, index) => {
            conservacaoFauna[index] = conservacaoFauna[index] || [];
            conservacaoFauna[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = conservacaoFauna.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasConservacaoFauna(obj){
    return {
        a1: verificaSimNao(obj.Voc_tem_facilidade_em_encontr),
        a2: verificaSimNao(obj.Voc_ca_a_para_consumo_pr_prio),
        a3: verificaSimNao(obj.Voc_se_sente_limitado_em_ca_a),
        a4: verificaSimNao(obj.Voc_acha_que_ativid_nserva_o_dos_animais)
    };
}