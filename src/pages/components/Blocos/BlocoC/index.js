import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoC = ({ setDados }) => {

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;

        setDados((prevDados) => {
            if (type === "checkbox") {
                const currentValue = prevDados[name] || "";

                return {
                    ...prevDados,
                    [name]: checked
                        ? (currentValue ? `${currentValue}|${value}` : value)
                        : currentValue
                            .split("|")
                            .filter(item => item !== value)
                            .join("|"),
                };
            } else {
                return {
                    ...prevDados,
                    [name]: value,
                };
            }
        });
    }

    return (
        <fieldset className={styles.secao}>
            <legend>Bloco C</legend>

            <label>Você se identifica como?</label>
            <label><input className={styles.campoInput} type="radio" name="identificacao" value="produtorMadeira" onChange={handleChange} /> Produtor de madeira</label>
            <label><input className={styles.campoInput} type="radio" name="identificacao" value="produtorOleos" onChange={handleChange} /> Produtor de óleos</label>
            <label><input className={styles.campoInput} type="radio" name="identificacao" value="artesaoArtesa" onChange={handleChange} /> Artesã/Artesão</label>
            <label><input className={styles.campoInput} type="radio" name="identificacao" value="pescador" onChange={handleChange} /> Pescador</label>
            <label><input className={styles.campoInput} type="radio" name="identificacao" value="agricultor" onChange={handleChange} /> Agricultor</label>
            <label><input className={styles.campoInput} type="radio" name="identificacao" value="outros" onChange={handleChange} /> Outros</label>
            <label>Se marcar "outros", abrir caixa com a pergunta: Quais?<input className={styles.campoInput} type="text" name="outrosIdentificacao" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="radio" name="identificacao" value="gestorUsina" onChange={handleChange} /> Gestor de usina</label>


            <label>Você possui alguma dessas fontes de renda?</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="aposentadoria" onChange={handleChange} /> Aposentadoria</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="bolsaFamilia" onChange={handleChange} /> Bolsa Família</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="bolsaEscola" onChange={handleChange} /> Bolsa Escola</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="seguroDesemprego" onChange={handleChange} /> Seguro Desemprego</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="ajudaParentes" onChange={handleChange} /> Ajuda de parentes</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="pensaoAlimenticia" onChange={handleChange} /> Pensão alimentícia</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="aluguel" onChange={handleChange} /> Aluguel</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="comercio" onChange={handleChange} /> Comércio</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="turismo" onChange={handleChange} /> Turismo</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="outra" onChange={handleChange} /> Outra</label>
            <label><input className={styles.campoInput} type="checkbox" name="fonteRenda" value="nenhuma" onChange={handleChange} /> Nenhuma</label>


            <label>Quais atividades você trabalha, qual é a sua renda e a quanto tempo você trabalha nessa atividade?</label>
            <label><input className={styles.campoInput} type="checkbox" name="atividadeTrabalho" value="extracaoMadeira" onChange={handleChange} /> Extração de madeira; Renda média mensal (Reais): <input className={styles.campoInput} type="text" name="rendaAtividade" onChange={handleChange} />; Tempo na atividade (anos): <input className={styles.campoInput} type="text" name="tempoAtividade" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="checkbox" name="atividadeTrabalho" value="extracaoOleos" onChange={handleChange} /> Extração de óleos; Renda média mensal (Reais): <input className={styles.campoInput} type="text" name="rendaAtividade" onChange={handleChange} />; Tempo na atividade (anos): <input className={styles.campoInput} type="text" name="tempoAtividade" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="checkbox" name="atividadeTrabalho" value="artesanato" onChange={handleChange} /> Artesanato; Renda média mensal (Reais): <input className={styles.campoInput} type="text" name="rendaAtividade" onChange={handleChange} />; Tempo na atividade (anos): <input className={styles.campoInput} type="text" name="tempoAtividade" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="checkbox" name="atividadeTrabalho" value="agricultura" onChange={handleChange} /> Agricultura; Renda média mensal (Reais): R$ <input className={styles.campoInput} type="text" name="rendaAtividade" onChange={handleChange} />; Tempo na atividade (anos): <input className={styles.campoInput} type="text" name="tempoAtividade" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="checkbox" name="atividadeTrabalho" value="pecuaria" onChange={handleChange} /> Pecuária/criação de animais; Renda média mensal(Reais): <input className={styles.campoInput} type="text" name="rendaAtividade" onChange={handleChange} />; Tempo na atividade (anos): <input className={styles.campoInput} type="text" name="tempoAtividade" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="checkbox" name="atividadeTrabalho" value="pesca" onChange={handleChange} /> Pesca; Renda média mensal (Reais): <input className={styles.campoInput} type="text" name="rendaAtividade" onChange={handleChange} />; Tempo na atividade (anos): <input className={styles.campoInput} type="text" name="tempoAtividade" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="checkbox" name="atividadeTrabalho" value="outra" onChange={handleChange} /> Outra; Renda média mensal (Reais): R$ <input className={styles.campoInput} type="text" name="rendaAtividade" onChange={handleChange} />; Tempo na atividade (anos): <input className={styles.campoInput} type="text" name="tempoAtividade" onChange={handleChange} /></label>

            <label>Por que você começou a trabalhar com isso?</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoTrabalho" value="projetoInstituicao" onChange={handleChange} /> Projeto de instituição</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoTrabalho" value="ambienteFavoravel" onChange={handleChange} /> Ambiente favorável à atividade</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoTrabalho" value="aprendeuPais" onChange={handleChange} /> Aprendeu com os pais</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoTrabalho" value="geraBoaRenda" onChange={handleChange} /> Gera boa renda</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoTrabalho" value="outroMotivo" onChange={handleChange} /> Outro</label>
            <label>Se marcar "outro", especificar: <input className={styles.campoInput} type="text" name="outroMotivoTrabalho" onChange={handleChange} /></label>

            <label>Quem são as pessoas que trabalham com você?</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasTrabalho" value="parentes" onChange={handleChange} /> Parentes</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasTrabalho" value="outrosComunitarios" onChange={handleChange} /> Outros comunitários</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasTrabalho" value="contratados" onChange={handleChange} /> Contratados</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasTrabalho" value="outroTipoPessoas" onChange={handleChange} /> Outro</label>
            <label>Se marcar "outro", especificar: <input className={styles.campoInput} type="text" name="outroTipoPessoas" onChange={handleChange} /></label>

            <label>Onde você trabalha?</label>
            <label><input className={styles.campoInput} type="checkbox" name="localTrabalho" value="areaPropria" onChange={handleChange} /> Área própria</label>
            <label><input className={styles.campoInput} type="checkbox" name="localTrabalho" value="areaComunidadeAssentamento" onChange={handleChange} /> Área da comunidade/assentamento</label>
            <label><input className={styles.campoInput} type="checkbox" name="localTrabalho" value="areaOutrasComunidade" onChange={handleChange} /> Área de outras comunidades</label>
            <label><input className={styles.campoInput} type="checkbox" name="localTrabalho" value="areaUnidadeConservacao" onChange={handleChange} /> Área de unidade de conservação</label>
            <label><input className={styles.campoInput} type="checkbox" name="localTrabalho" value="outrasAreasParticulares" onChange={handleChange} /> Em outras áreas particulares</label>
            <label><input className={styles.campoInput} type="checkbox" name="localTrabalho" value="areasPublicas" onChange={handleChange} /> Em áreas públicas</label>
            <label><input className={styles.campoInput} type="checkbox" name="localTrabalho" value="naoSeiEspecificar" onChange={handleChange} /> Não sei especificar</label>

            <label>Quanto tempo você demora para chegar até sua área de trabalho?</label>
            <label><input className={styles.campoInput} type="radio" name="tempoChegadaTrabalho" value="15a30MinutosAgricultura" onChange={handleChange} /> 15 a 30 minutos/ agricultura</label>
            <label><input className={styles.campoInput} type="radio" name="tempoChegadaTrabalho" value="1horaUsina" onChange={handleChange} /> 1 hora / usina</label>
            <label><input className={styles.campoInput} type="radio" name="tempoChegadaTrabalho" value="2horas" onChange={handleChange} /> 2 horas</label>
            <label><input className={styles.campoInput} type="radio" name="tempoChegadaTrabalho" value="3horas" onChange={handleChange} /> 3 horas</label>
            <label><input className={styles.campoInput} type="radio" name="tempoChegadaTrabalho" value="maisDe3Horas" onChange={handleChange} /> Mais de 3 horas</label>

            <label>Como você chega lá?</label>
            <label><input className={styles.campoInput} type="checkbox" name="meioTransporte" value="aPe" onChange={handleChange} /> A pé</label>
            <label><input className={styles.campoInput} type="checkbox" name="meioTransporte" value="transporteAnimal" onChange={handleChange} /> Transporte animal</label>
            <label><input className={styles.campoInput} type="checkbox" name="meioTransporte" value="canoaVoadeiraBarcoRabeta" onChange={handleChange} /> Canoa/voadeira/barco/rabeta</label>
            <label><input className={styles.campoInput} type="checkbox" name="meioTransporte" value="bicicleta" onChange={handleChange} /> Bicicleta</label>
            <label><input className={styles.campoInput} type="checkbox" name="meioTransporte" value="motocicleta" onChange={handleChange} /> Motocicleta</label>
            <label><input className={styles.campoInput} type="checkbox" name="meioTransporte" value="carroCaminhaoOnibus" onChange={handleChange} /> Carro/caminhão/ônibus</label>

            <label>Quantas horas por dia você trabalha na época da safra?</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSafra" value="2HorasDia" onChange={handleChange} /> 2 horas/dia</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSafra" value="2a4HorasDia" onChange={handleChange} /> 2 a 4 horas/dia</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSafra" value="4a6HorasDia" onChange={handleChange} /> 4 a 6 horas/dia</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSafra" value="6a8HorasDia" onChange={handleChange} /> 6 a 8 horas/dia</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSafra" value="maisDe8HorasDia" onChange={handleChange} /> Mais que 8 horas/dia</label>

            <label>Quantas horas por dia você trabalha na época em que não há safra?</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSemSafra" value="2HorasDia" onChange={handleChange} /> 2 horas/dia</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSemSafra" value="2a4HorasDia" onChange={handleChange} /> 2 a 4 horas/dia</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSemSafra" value="4a6HorasDia" onChange={handleChange} /> 4 a 6 horas/dia</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSemSafra" value="6a8HorasDia" onChange={handleChange} /> 6 a 8 horas/dia</label>
            <label><input className={styles.campoInput} type="radio" name="horasTrabalhoSemSafra" value="maisDe8HorasDia" onChange={handleChange} /> Mais que 8 horas/dia</label>

            <label>Você pernoita no local de trabalho?</label>
            <label><input className={styles.campoInput} type="radio" name="pernoiteLocalTrabalho" value="sim" onChange={handleChange} /> SIM</label>
            <label><input className={styles.campoInput} type="radio" name="pernoiteLocalTrabalho" value="nao" onChange={handleChange} /> NÃO</label>
            <label><input className={styles.campoInput} type="radio" name="pernoiteLocalTrabalho" value="asVezes" onChange={handleChange} /> Às vezes</label>
            <label>Se SIM, QUANTAS NOITES?<input className={styles.campoInput} type="text" name="quantidadeNoitesPernoite" onChange={handleChange} /></label>

            <label>Você realiza algum beneficiamento do produto? (é o processo que modifica um produto em outro e geralmente o novo produto tem um preço maior)</label>
            <label><input className={styles.campoInput} type="radio" name="realizaBeneficiamento" value="sim" onChange={handleChange} /> SIM</label>
            <label><input className={styles.campoInput} type="radio" name="realizaBeneficiamento" value="nao" onChange={handleChange} /> NÃO</label>
            <label>SE SIM, QUAL?</label>
            <label><input className={styles.campoInput} type="checkbox" name="tipoBeneficiamento" value="madeiraSerrada" onChange={handleChange} /> Madeira serrada pranchão ecosserra fita</label>
            <label><input className={styles.campoInput} type="checkbox" name="tipoBeneficiamento" value="moveisMadeira" onChange={handleChange} /> Móveis de madeira</label>
            <label><input className={styles.campoInput} type="checkbox" name="tipoBeneficiamento" value="oleosBeneficiados" onChange={handleChange} /> Óleos beneficiados</label>
            <label><input className={styles.campoInput} type="checkbox" name="tipoBeneficiamento" value="objetosArtesanato" onChange={handleChange} /> Objetos para artesanato: colares, brincos, cestas etc</label>
            <label><input className={styles.campoInput} type="checkbox" name="tipoBeneficiamento" value="peixeTratado" onChange={handleChange} /> Peixe tratado</label>
            <label><input className={styles.campoInput} type="checkbox" name="tipoBeneficiamento" value="produtosAgricultura" onChange={handleChange} /> Produtos da agricultura: Farinha, arroz, milho, café</label>
            <label><input className={styles.campoInput} type="checkbox" name="tipoBeneficiamento" value="carneVermelhaProcessada" onChange={handleChange} /> Carne vermelha processada</label>
        </fieldset>
    );
}

export default BlocoC;
