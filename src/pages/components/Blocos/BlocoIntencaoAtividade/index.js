import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoIntencaoAtividade = ({ setDados }) => {

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
            <legend>Caracterização da Intenção de Trabalhar com a Atividade</legend>

            <label>Você realiza técnicas de silvicultura? (Silvicultura é toda a prática de intervenção em florestas como o plantio de mudas, poda, corte com o objetivo de melhorar o crescimento de árvores ou plantações de interesse).</label>
            <label><input className={styles.campoInput} type="radio" name="silvicultura" value="sim" onChange={handleChange} /> SIM</label>
            <label><input className={styles.campoInput} type="radio" name="silvicultura" value="nao" onChange={handleChange} /> NÃO</label>

            <div id="opcoesSilvicultura">
                <label>Se SIM, Qual (is)?<input className={styles.campoInput} type="text" name="tecnicasSilvicultura" onChange={handleChange} /></label>
            </div>

            <div id="avancarProximoPasso">
                <label>Se NÃO, avança para o próximo passo</label>
            </div>

            <label>A quanto tempo você trabalha no manejo de óleos ou de madeira?</label>
            <label><input className={styles.campoInput} type="radio" name="tempoManejo" value="projetoInatu" onChange={handleChange} /> Estou começando no Projeto Inatú Amazônia</label>
            <label><input className={styles.campoInput} type="radio" name="tempoManejo" value="menos1Ano" onChange={handleChange} /> Menos de 1 ano</label>
            <label><input className={styles.campoInput} type="radio" name="tempoManejo" value="1a3Anos" onChange={handleChange} /> 1 a 3 anos</label>
            <label><input className={styles.campoInput} type="radio" name="tempoManejo" value="4a5Anos" onChange={handleChange} /> 4 a 5 anos</label>
            <label><input className={styles.campoInput} type="radio" name="tempoManejo" value="6a10Anos" onChange={handleChange} /> 6 a 10 anos</label>
            <label><input className={styles.campoInput} type="radio" name="tempoManejo" value="mais10Anos" onChange={handleChange} /> Mais de 10 anos</label>

            <label>EM QUAIS ATIVIDADES VOCE TEM INTERESSE EM TRABALHAR?</label>
            <label><input className={styles.campoInput} type="checkbox" name="interesseAtividades" value="extracaoMadeira" onChange={handleChange} /> Extração de madeira</label>
            <label><input className={styles.campoInput} type="checkbox" name="interesseAtividades" value="extracaoOleos" onChange={handleChange} /> Extração de óleos</label>
            <label><input className={styles.campoInput} type="checkbox" name="interesseAtividades" value="artesanato" onChange={handleChange} /> Artesanato</label>
            <label><input className={styles.campoInput} type="checkbox" name="interesseAtividades" value="agricultura" onChange={handleChange} /> Agricultura</label>
            <label><input className={styles.campoInput} type="checkbox" name="interesseAtividades" value="pecuaria" onChange={handleChange} /> Pecuária</label>
            <label><input className={styles.campoInput} type="checkbox" name="interesseAtividades" value="pesca" onChange={handleChange} /> Pesca</label>

            <label>Quanto você diria que tem conhecimento sobre ESSA ATIVIDADE DE INTERESSE</label>
            <label><input className={styles.campoInput} type="radio" name="conhecimentoAtividade" value="muito" onChange={handleChange} /> Muito</label>
            <label><input className={styles.campoInput} type="radio" name="conhecimentoAtividade" value="medio" onChange={handleChange} /> Médio</label>
            <label><input className={styles.campoInput} type="radio" name="conhecimentoAtividade" value="pouco" onChange={handleChange} /> Pouco</label>
            <label><input className={styles.campoInput} type="radio" name="conhecimentoAtividade" value="nenhum" onChange={handleChange} /> Nenhum</label>

            <label>O que despertou seu interesse por esse trabalho?</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoInteresse" value="oportunidadeRenda" onChange={handleChange} /> Oportunidade de renda</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoInteresse" value="abundanciaEspecieRegiao" onChange={handleChange} /> Abundância da espécie na região</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoInteresse" value="facilidadeTrabalho" onChange={handleChange} /> Facilidade no trabalho</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoInteresse" value="criacaoProjetoCidadesFlorestais" onChange={handleChange} /> Criação do projeto Cidades Florestais</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivoInteresse" value="outroMotivo" onChange={handleChange} /> Outro</label>
            <label>Se marcar "outro", especificar: <input className={styles.campoInput} type="text" name="outroMotivoInteresse" onChange={handleChange} /></label>

            <label>Você já ouviu falar sobre certificação de atividades e produtos? (A certificação é a garantia de que o seu produto passou por processos que não agrediram a natureza, que a sua atividade respeita os direitos das pessoas que estão trabalhando e garante um preço maior para o produto. A certificação é feita por um grupo de pessoas ou empresa específica)</label>
            <label><input className={styles.campoInput} type="radio" name="ouviuCertificacao" value="sim" onChange={handleChange} /> SIM</label>
            <label><input className={styles.campoInput} type="radio" name="ouviuCertificacao" value="nao" onChange={handleChange} /> NÃO</label>

            <label>Seus produtos são certificados?</label>
            <label><input className={styles.campoInput} type="radio" name="produtosCertificados" value="sim" onChange={handleChange} /> SIM</label>
            <label><input className={styles.campoInput} type="radio" name="produtosCertificados" value="nao" onChange={handleChange} /> NÃO</label>

            <label>Você sabia que os produtos da floresta podem ser reconhecidos como orgânicos?</label>
            <label><input className={styles.campoInput} type="radio" name="produtosOrganicos" value="sim" onChange={handleChange} /> SIM</label>
            <label><input className={styles.campoInput} type="radio" name="produtosOrganicos" value="nao" onChange={handleChange} /> NÃO</label>

            <label>Quais motivos te fariam querer saber mais sobre o reconhecimento de produtos orgânicos e a certificação de atividades e produtos?</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivosCertificacao" value="ganharMaisPeloProduto" onChange={handleChange} /> Possibilidade de ganhar mais pelo produto</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivosCertificacao" value="vendaEmMaisLocais" onChange={handleChange} /> Possibilidade de venda em mais locais</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivosCertificacao" value="garantirConservacaoFloresta" onChange={handleChange} /> Garantir a conservação da floresta</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivosCertificacao" value="garantirBoasCondicoesTrabalho" onChange={handleChange} /> Garantir boas condições de trabalho</label>
            <label><input className={styles.campoInput} type="checkbox" name="motivosCertificacao" value="acessoPoliticasPublicas" onChange={handleChange} /> Ter acesso a políticas públicas específicas</label>

            <label>Se fosse pra ter a certificação e o reconhecimento de produto orgânico, você concordaria em alterar as suas práticas de produção atual?</label>
            <label><input className={styles.campoInput} type="radio" name="concordanciaCertificacao" value="sim" onChange={handleChange} /> SIM</label>
            <label><input className={styles.campoInput} type="radio" name="concordanciaCertificacao" value="nao" onChange={handleChange} /> NÃO</label>
        </fieldset>
    );
}

export default BlocoIntencaoAtividade;

