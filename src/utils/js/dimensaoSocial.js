import { calcularMedia, verificaSimNao } from "./functionPadroes";

///////////////////////////////////// S1 ////////////////////////////////////////////////////

export function calcS1(dados) {
    const relacoesParceirosInstituicoes = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'];

    for (const item of dados) {
        const aux = calcularPerguntasRelacoes(item);
        perguntas.forEach((pergunta, index) => {
            relacoesParceirosInstituicoes[index] = relacoesParceirosInstituicoes[index] || [];
            relacoesParceirosInstituicoes[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = relacoesParceirosInstituicoes.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasRelacoes(obj){
    return {
        a1: verificaSimNao(obj.Voc_participa_de_al_rativa_da_comunidade),
        a2: verificaSimNao(obj.Qual_a_intensidade_ssocia_o_Cooperativa),
        a3: verificaSimNao(obj.O_trabalho_com_o_manejo_de_mad),
        a4: verificaSimNao(obj.Tem_alguma_parte_do_trabalho_d),
        a5: verificaSimNao(obj.O_Projeto_do_plano_d_algum_conflito_local),
        a6: verificaSimNao(obj.Esse_conflito_foi_resolvido),
        a7: verificaSimNao(obj.O_Projeto_plano_de_m_com_pessoas_de_fora),
        a8: verificaSimNao(obj.Esse_conflito_com_pe_e_fora_foi_resolvido)
    };
}

//-------------------------------------- S2 ---------------------------------------------//

export function calcS2(dados) {
    const visibilidadeJovem = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4'];

    for (const item of dados) {
        const aux = calcularPerguntasVisibilidadeJovem(item);
        perguntas.forEach((pergunta, index) => {
            visibilidadeJovem[index] = visibilidadeJovem[index] || [];
            visibilidadeJovem[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = visibilidadeJovem.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasVisibilidadeJovem(obj){
    return {
        a1: verificaSimNao(obj.Voc_acha_que_os_jov_va_da_sua_comunidade),
        a2: verificaSimNao(obj.Os_jovens_frequentam_s_fora_da_comunidade),
        a3: verificaSimNao(obj.Voc_acha_que_os_jov_adeira_e_ou_de_leos),
        a4: verificaSimNao(obj.Voc_acha_que_o_Proj_uxe_renda_aos_jovens),
    };
}

//---------------------------------------- S3 -------------------------------------------------//

export function calcS3(dados) {
    const participacaoMulher = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5'];

    for (const item of dados) {
        const aux = calcularPerguntasParticipacaoMulher(item);
        perguntas.forEach((pergunta, index) => {
            participacaoMulher[index] = participacaoMulher[index] || [];
            participacaoMulher[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = participacaoMulher.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasParticipacaoMulher(obj){
    return {
        a1: verificaSimNao(obj.Voc_percebe_a_participa_o_das),
        a2: verificaSimNao(obj.Elas_recebem_o_mesmo_valor_que_os_homens),
        a3: verificaSimNao(obj.Nas_tarefas_iguais_elas_recebem_valores),
        a4: verificaSimNao(obj.Nas_tarefas_diferent_elas_recebem_valores),
        a5: verificaSimNao(obj.Voc_acha_que_a_Associa_o_ou_C)
    };
}