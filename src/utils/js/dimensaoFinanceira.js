import { calcularMedia, verificaSimNao } from "./functionPadroes";

///////////////////////////////////// F1 ////////////////////////////////////////////////////

export function calcF1(dados) {
    const capital = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];

    for (const item of dados) {
        const aux = calcularPerguntasCapital(item);
        perguntas.forEach((pergunta, index) => {
            capital[index] = capital[index] || [];
            capital[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = capital.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasCapital(obj){
    return {
        a1: verificaSimNao(obj.Hoje_em_dia_voc_gua_adeira_e_ou_de_leos),
        a2: verificaSimNao(obj.Hoje_em_dia_voc_ac_adeira_e_ou_de_leos),
        a3: verificaSimNao(obj.Hoje_em_dia_voc_ach_Cooperativa_ou_Usina),
        a4: verificaSimNao(obj.Hoje_em_dia_os_seus_adeira_e_ou_de_leos),
        a5: verificaSimNao(obj.Hoje_em_dia_voc_tem_d_vidas_f),
        a6: verificaSimNao(obj.Hoje_em_dia_voc_tem_a_capacid)
    };
}

//-------------------------------------- F2 ---------------------------------------------//

export function calcF2(dados) {
    const preco = [];
    const perguntas = ['a1', 'a2', 'a3'];

    for (const item of dados) {
        const aux = calcularPerguntasPreco(item);
        perguntas.forEach((pergunta, index) => {
            preco[index] = preco[index] || [];
            preco[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = preco.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasPreco(obj){
    return {
        a1: verificaSimNao(obj.O_preço_pago_pelo_produto_é_bom),
        a2: verificaSimNao(obj.O_meu_pagamento_pelo_trabalho_compensa),
        a3: verificaSimNao(obj.Quem_faz_produto_com_melhor_qualidade)
    };
}

//---------------------------------------- F3 -------------------------------------------------//

export function calcF3(dados) {
    const comercializacao = [];
    const perguntas = ['a1', 'a2', 'a3', 'a4', 'a5'];

    for (const item of dados) {
        const aux = calcularPerguntasComercializacao(item);
        perguntas.forEach((pergunta, index) => {
            comercializacao[index] = comercializacao[index] || [];
            comercializacao[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = comercializacao.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasComercializacao(obj){
    return {
        a1: verificaSimNao(obj.Você_tem_controle_de_gastos_para_produzir),
        a2: verificaSimNao(obj.Atualmente_vende_os_seus_produtos),
        a3: verificaSimNao(obj.Retorno_financeiro_com_as_vendas),
        a4: verificaSimNao(obj.Quem_diz_preço_produtos),
        a5: verificaSimNao(obj.Quando_você_tem_os_produtos_para_venda)
    };
}

//---------------------------------------- F4 -------------------------------------------------//

export function calcF4(dados) {
    const acesso = [];
    const perguntas = ['a1', 'a2', 'a3'];

    for (const item of dados) {
        const aux = calcularPerguntasAcesso(item);
        perguntas.forEach((pergunta, index) => {
            acesso[index] = acesso[index] || [];
            acesso[index].push(aux[pergunta]);
        });
    }

    const mediaArrays = acesso.map(array => calcularMedia(array));
    const mediaFinal = calcularMedia(mediaArrays);
    
    return mediaFinal;
}

function calcularPerguntasAcesso(obj){
    return {
        a1: verificaSimNao(obj.Você_conhece_linha_de_crédito),
        a2: verificaSimNao(obj.Você_já_fez_uso_linha_de_crédito),
        a3: verificaSimNao(obj.Comunidade_Associação_faz_uso_linha_de_crédito)
    };
}