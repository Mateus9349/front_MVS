async function enviarMVS(dados) {
    await cabecalho(dados);
    await dadosPessoais(dados);
    await blocoB(dados);
    await blocoC(dados);
    await intencaoAtividade(dados);

    await dimensaoHumana(dados);
    await dimensaoSocial(dados);
    await dimensaoAmbiental(dados);
    await dimensaoFisica(dados);
    await dimensaoFinanceira(dados);
}

async function cabecalho(dados) {
    const cabecalho = {
        dataEntrevista: dados.dataEntrevista,
        duracaoEntrevista: dados.duracaoEntrevista,
        entrevistador: dados.entrevistador,
        identificadorEntrevista: dados.identificadorEntrevista,
        nomeEntrevistado: dados.nomeEntrevistado
    }
}

async function dadosPessoais(dados) {
    const dadosPessoais = {
        cidadeAtual: dados.cidadeAtual,
        cidadeNascimento: dados.cidadeNascimento,
        estadoCivil: dados.estadoCivil,
        estadoNascimento: dados.estadoNascimento,
        idade: dados.idade,
        localidadeAtual: dados.localidadeAtual,
        nivelEscolaridade: dados.nivelEscolaridade,
        quantidadeFilhos: dados.quantidadeFilhos,
        tempoMoraLocal: dados.tempoMoraLocal
    }
}

async function blocoB(dados) {
    const blocoB = {
        acessoInternet: dados.acessoInternet,
        conexaoInternet: dados.conexaoInternet,
        conheceProgramas: dados.conheceProgramas,
        expectativasProjeto: dados.expectativasProjeto,
        localConexaoInternet: dados.localConexaoInternet,
        participaProgramas: dados.participaProgramas,
        porqueInsatisfacao: dados.porqueInsatisfacao,
        quaisProgramas: dados.quaisProgramas,
        satisfacaoProgramas: dados.satisfacaoProgramas,
        satisfacaoProjeto: dados.satisfacaoProjeto,
        telefone: dados.telefone,
        usaComputador: dados.usaComputador
    }
}

async function blocoC(dados) {
    const blocoC = {
        atividadeTrabalho: dados.atividadeTrabalho,
        fonteRenda: dados.fonteRenda,
        horasTrabalhoSafra: dados.horasTrabalhoSafra,
        horasTrabalhoSemSafra: dados.horasTrabalhoSemSafra,
        identificacao: dados.identificacao,
        localTrabalho: dados.localTrabalho,
        meioTransporte: dados.meioTransporte,
        motivoTrabalho: dados.motivoTrabalho,
        outroMotivoTrabalho: dados.outroMotivoTrabalho,
        outroTipoPessoas: dados.outroTipoPessoas,
        outrosIdentificacao: dados.outrosIdentificacao,
        pernoiteLocalTrabalho: dados.pernoiteLocalTrabalho,
        pessoasTrabalho: dados.pessoasTrabalho,
        quantidadeNoitesPernoite: dados.quantidadeNoitesPernoite,
        realizaBeneficiamento: dados.realizaBeneficiamento,
        rendaAtividade: dados.rendaAtividade,
        tempoAtividade: dados.tempoAtividade,
        tempoChegadaTrabalho: dados.tempoChegadaTrabalho,
        tipoBeneficiamento: dados.tipoBeneficiamento
    }
}

async function intencaoAtividade(dados) {
    const intencaoAtividade = {
        concordanciaCertificacao: dados.concordanciaCertificacao,
        conhecimentoAtividade: dados.conhecimentoAtividade,
        interesseAtividades: dados.interesseAtividades,
        motivoInteresse: dados.motivoInteresse,
        motivosCertificacao: dados.motivosCertificacao,
        outroMotivoInteresse: dados.outroMotivoInteresse,
        ouviuCertificacao: dados.ouviuCertificacao,
        produtosCertificados: dados.produtosCertificados,
        produtosOrganicos: dados.produtosOrganicos,
        silvicultura: dados.silvicultura,
        tecnicasSilvicultura: dados.tecnicasSilvicultura,
        tempoManejo: dados.tempoManejo
    }
}

async function dimensaoHumana(dados) {
    const dimensaoHumana = {
        acessoAlimentosQualidade: dados.acessoAlimentosQualidade,
        gastaDinheiroAlimentos: dados.gastaDinheiroAlimentos,
        origemAlimentacao: dados.origemAlimentacao,
        usoDinheiroAlimentos: dados.usoDinheiroAlimentos,
        aprendizadoNatureza: dados.aprendizadoNatureza,
        outroAprendizadoNatureza: dados.outroAprendizadoNatureza,
        quemTransmissaoConhecimentos: dados.quemTransmissaoConhecimentos,
        transmissaoConhecimentos: dados.transmissaoConhecimentos,
        usoConhecimentosTrabalho: dados.usoConhecimentosTrabalho,
        aprendizadoNovo: dados.aprendizadoNovo,
        aprendizadoTrabalho: dados.aprendizadoTrabalho,
        assistenciaTecnica: dados.assistenciaTecnica,
        outroAprendizadoTrabalho: dados.outroAprendizadoTrabalho,
        pessoasConversa: dados.pessoasConversa,
        quaisAprendizadoNovo: dados.quaisAprendizadoNovo,
        quaisAssistenciaTecnica: dados.quaisAssistenciaTecnica,
        melhorarVidaTrabalho: dados.melhorarVidaTrabalho,
        naoMelhorarVidaTrabalho: dados.naoMelhorarVidaTrabalho,
        naoReconhecimentoTrabalho: dados.naoReconhecimentoTrabalho,
        reconhecimentoTrabalho: dados.reconhecimentoTrabalho,
        satisfacaoBeneficiosTrabalho: dados.satisfacaoBeneficiosTrabalho,
        satisfacaoLocalTrabalho: dados.satisfacaoLocalTrabalho,
        satisfacaoPessoasTrabalho: dados.satisfacaoPessoasTrabalho,
        equipamentoProtecao: dados.equipamentoProtecao,
        principaisRiscosTrabalho: dados.principaisRiscosTrabalho,
        quaisEquipamentoProtecao: dados.quaisEquipamentoProtecao,
        qualTreinamentoSegurancaTrabalho: dados.qualTreinamentoSegurancaTrabalho,
        riscosTrabalho: dados.riscosTrabalho,
        treinamentoSegurancaTrabalho: dados.treinamentoSegurancaTrabalho
    }
}

async function dimensaoSocial(dados) {
    const social = {
        impactoComunidade: dados.impactoComunidade,
        impactoFamilia: dados.impactoFamilia,
        outroParcerias: dados.outroParcerias,
        parceriasInstituicoes: dados.parceriasInstituicoes,
        participacaoAssociacao: dados.participacaoAssociacao,
        porqueImpactoComunidade: dados.porqueImpactoComunidade,
        porqueImpactoFamilia: dados.porqueImpactoFamilia,
        quaisParcerias: dados.quaisParcerias,
        relacaoAssociacao: dados.relacaoAssociacao,
        trabalhoComunidade: dados.trabalhoComunidade,
        trabalhoFamilia: dados.trabalhoFamilia,
        envolvimentoJovensRenda: dados.envolvimentoJovensRenda,
        escolasJovens: dados.escolasJovens,
        participacaoJovensDecisoes: dados.participacaoJovensDecisoes,
        projetoInatuRendaJovens: dados.projetoInatuRendaJovens,
        comoIncentivoParticipacaoMulher: dados.comoIncentivoParticipacaoMulher,
        incentivoParticipacaoMulher: dados.incentivoParticipacaoMulher,
        outrasTrabalhoMulher: dados.outrasTrabalhoMulher,
        participacaoMulherAtividade: dados.participacaoMulherAtividade,
        quaisTarefasMulher: dados.quaisTarefasMulher,
        tarefasMulher: dados.tarefasMulher,
        trabalhoMulher: dados.trabalhoMulher,
        valorIgualMulher: dados.valorIgualMulher,
        valorRecebidoMulher: dados.valorRecebidoMulher
    }
}

async function dimensaoAmbiental(dados) {
    const dimensaoAmbiental = {
        atrapalhaOutraPessoa: dados.atrapalhaOutraPessoa,
        origemMateriais: dados.origemMateriais,
        periodoSemAtividade: dados.periodoSemAtividade,
        tempoSemAtividade: dados.tempoSemAtividade,
        comoContribuicaoTrabalhoFloresta: dados.comoContribuicaoTrabalhoFloresta,
        contribuicaoTrabalhoFloresta: dados.contribuicaoTrabalhoFloresta,
        disponibilidadeEspecieTempo: dados.disponibilidadeEspecieTempo,
        estadoFloresta: dados.estadoFloresta,
        utilizaEspecieFloresta: dados.utilizaEspecieFloresta,
        ajudaConservacaoAnimais: dados.ajudaConservacaoAnimais,
        cacaConsumoProprio: dados.cacaConsumoProprio,
        facilidadeEncontrarAnimais: dados.facilidadeEncontrarAnimais,
        impedimentoCaca: dados.impedimentoCaca,
        motivoNaoAjudarConservacaoAnimais: dados.motivoNaoAjudarConservacaoAnimais,
        motivoNaoEncontrarAnimais: dados.motivoNaoEncontrarAnimais,
        motivosImpedimentoCaca: dados.motivosImpedimentoCaca
    }
}

async function dimensaoFisica(dados) {
    const dimensaoFisica = {
        equipamentosProprios: dados.equipamentosProprios,
        facilidadeDeslocarProdutos: dados.facilidadeDeslocarProdutos,
        faltaTrabalharMelhor: dados.faltaTrabalharMelhor,
        oQueFaltaTrabalharMelhor: dados.oQueFaltaTrabalharMelhor,
        equipamentosProprios: dados.equipamentosProprios,
        facilidadeDeslocarProdutos: dados.facilidadeDeslocarProdutos,
        faltaTrabalharMelhor: dados.faltaTrabalharMelhor,
        oQueFaltaTrabalharMelhor: dados.oQueFaltaTrabalharMelhor,
        comprasUltimosDoisAnos: dados.comprasUltimosDoisAnos,
        dinheiroAtividadesCompras: dados.dinheiroAtividadesCompras,
        facilidadeTransporteCidade: dados.facilidadeTransporteCidade,
        motivoFacilidadeTransporteCidade: dados.motivoFacilidadeTransporteCidade
    }
}

async function dimensaoFinanceira(dados) {
    const dimensaoFinanceira = {
        capacidadePagarDividas: dados.capacidadePagarDividas,
        coberturaGastosAssociacao: dados.coberturaGastosAssociacao,
        coberturaGastosIndividuais: dados.coberturaGastosIndividuais,
        dividasFinanceiras: dados.dividasFinanceiras,
        guardaDinheiroAssociacao: dados.guardaDinheiroAssociacao,
        guardaDinheiroAtividades: dados.guardaDinheiroAtividades,
        pagamentoCompensaGastos: dados.pagamentoCompensaGastos,
        precoBom: dados.precoBom,
        qualidadePreco: dados.qualidadePreco,
        controleGastosProducao: dados.controleGastosProducao,
        controleGastosProducaoMetodo: dados.controleGastosProducaoMetodo,
        facilidadeVenderSempre: dados.facilidadeVenderSempre,
        publicoAlvoVendas: dados.publicoAlvoVendas,
        quemDefinePreco: dados.quemDefinePreco,
        retornoFinanceiroVendas: dados.retornoFinanceiroVendas,
        conheceLinhaCredito: dados.conheceLinhaCredito,
        usoComunidadeLinhaCredito: dados.usoComunidadeLinhaCredito,
        usoLinhaCredito: dados.usoLinhaCredito
    }
}