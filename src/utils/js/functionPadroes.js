export function verificaSimNao(valor) {
    if (valor === 'sim' || valor === 'Sim') {
        return 1;
    } else if (valor === 'não' || valor === 'nao' || valor === 'Não' || valor === 'Nao') {
        return 0;
    } else {
        return 0.5;
    }
}

export function calcularMedia(array) {
    // Converter strings em números
    const numeros = array.map(item => parseFloat(item)).filter(item => !isNaN(item));

    // Verificar se há números no array
    if (numeros.length === 0) {
        return 0; // Retornar 0 se não houver números no array
    }

    // Calcular a média
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    return soma / numeros.length;
}


export function extrairDataSeparada(dataISO8601) {
    // Criar um objeto Date a partir da data ISO 8601
    const data = new Date(dataISO8601);

    // Extrair o ano, mês e dia da data
    const ano = data.getFullYear();
    // Lembrando que os meses começam de 0 (janeiro) a 11 (dezembro)
    const mes = data.getMonth() + 1; // Adicionar 1 para obter o mês no formato 1-12
    const dia = data.getDate();

    // Retornar um objeto com os atributos separados
    return { ano, mes, dia };
}

export const filtrarObjetosPorData = (arrayObjetos, dataInicio, dataFim) => {
    // Verificar se arrayObjetos é um array
    if (!Array.isArray(arrayObjetos)) {
        throw new TypeError("O primeiro argumento deve ser um array");
    }

    // Converter datas de início e fim para objetos Date
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);

    // Verificar se as datas são válidas
    if (isNaN(inicio) || isNaN(fim)) {
        throw new Error("Datas inválidas fornecidas");
    }

    // Filtrar os objetos que possuem 'createdAt' dentro do intervalo
    return arrayObjetos.filter(objeto => {
        const dataObjeto = new Date(objeto.createdAt);
        return dataObjeto >= inicio && dataObjeto <= fim;
    });
};

export function buscarMVS(array, dataInicio, dataFim) {
    // Converter as datas de string para objetos Date
    const dataInicioObj = new Date(dataInicio);
    const dataFimObj = new Date(dataFim);

    // Ajustar as datas para ignorar os minutos e segundos
    dataInicioObj.setHours(0, 0, 0, 0);
    dataFimObj.setHours(23, 59, 59, 999);

    //Converter o array que esta em string em objeto
    const arrayObjeto = reagruparDados(array);

    // Filtrar os objetos do array que estão dentro do intervalo de datas
    const objetosFiltrados = arrayObjeto.filter(objeto => {
        // Verificar se o objeto possui a propriedade 'createdAt'
        if (objeto.createdAt) {
            // Converter a data de criação do objeto para um objeto Date
            const dataCriacao = new Date(objeto.createdAt);
            // Ajustar a data de criação para ignorar os minutos e segundos
            dataCriacao.setUTCHours(0, 0, 0, 0);
            // Verificar se a data de criação está dentro do intervalo de datas
            return dataCriacao >= dataInicioObj && dataCriacao <= dataFimObj;
        }
        return false; // Ignorar objetos que não possuem a propriedade 'createdAt'
    });

    return objetosFiltrados;
}

export function reagruparDados(
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
) {
    const dados = {};

    const parametros = [
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
    ];

    for (const param of parametros) {
        // Se o parâmetro for um objeto, mescla seus atributos no objeto 'dados'
        if (param && typeof param === 'object') {
            Object.assign(dados, param);
        }
    }

    return dados;
}


function ordenarValoresObjetos(dados) {

}


