import { calcularMedia, verificaSimNao } from "./functionPadroes";

///////////////////////////////////// P1 ////////////////////////////////////////////////////

export function calcP1(dados) {
    const infraestruturaIndividual = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5'];

    for (const item of dados) {
        const aux = calcularPerguntasInfraestruturaIndividual(item);
        perguntas.forEach((pergunta, index) => {
            infraestruturaIndividual[index] = infraestruturaIndividual[index] || [];
            infraestruturaIndividual[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = infraestruturaIndividual.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasInfraestruturaIndividual(obj){
    return {
        a1: verificaSimNao(obj.Voc_possui_equipame_adeira_e_ou_de_leos),
        a2: verificaSimNao(obj.Voc_tem_facilidade_mentos_e_ferramentas),
        a3: verificaSimNao(obj.Voc_tem_facilidade_do_local_onde_mora),
        a4: verificaSimNao(obj.Tem_algum_equipamento_ou_ferra),
        a5: verificaSimNao(obj.Tem_alguma_coisa_faltando_pra_)
    };
}

//-------------------------------------- P2 ---------------------------------------------//

export function calcP2(dados) {
    const infraestruturaColetiva = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];

    for (const item of dados) {
        const aux = calcularPerguntasinfraEstruturaColetiva(item);
        perguntas.forEach((pergunta, index) => {
            infraestruturaColetiva[index] = infraestruturaColetiva[index] || [];
            infraestruturaColetiva[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = infraestruturaColetiva.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasinfraEstruturaColetiva(obj){
    return {
        a1: verificaSimNao(obj.Na_sua_comunidade_existe_equip),
        a2: verificaSimNao(obj.Esses_equipamentos_s_o_utiliza),
        a3: verificaSimNao(obj.Esses_equipamentos_e_em_que_lugar_espa_o),
        a4: verificaSimNao(obj.Todo_mundo_respeita_de_trabalho_do_outro),
        a5: verificaSimNao(obj.Voc_tem_facilidade_em_transpo),
        a6: verificaSimNao(obj.Voc_tem_facilidade_em_transpo_001)
    };
}

//---------------------------------------- P3 -------------------------------------------------//

export function calcP3(dados) {
    const infraestruturaIndividualFamiliar = [];
    const perguntas = ['a1', 'a2'];

    for (const item of dados) {
        const aux = calcularPerguntasInfraestruturaIndividualFamiliar(item);
        perguntas.forEach((pergunta, index) => {
            infraestruturaIndividualFamiliar[index] = infraestruturaIndividualFamiliar[index] || [];
            infraestruturaIndividualFamiliar[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = infraestruturaIndividualFamiliar.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasInfraestruturaIndividualFamiliar(obj){
    return {
        a1: verificaSimNao(obj.Nos_ultimos_2_dois_anos_voc_),
        a2: verificaSimNao(obj.Em_rela_o_ao_transporte_voc_)
    };
}