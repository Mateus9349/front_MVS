import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoRelacaoParceirosInstituicoes = ({ setDados }) => {

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
            <legend>DIMENSÃO SOCIAL - S1. Relações com parceiros e instituições</legend>

            <label>C20. Você participa de alguma Associação ou Cooperativa da comunidade?</label>
            <label><input className={styles.campoInput} type="radio" name="participacaoAssociacao" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="participacaoAssociacao" value="nao" onChange={handleChange} /> Não</label>

            <label>C21. Qual é o nível de relação com a sua Associação/Cooperativa?</label>
            <label><input className={styles.campoInput} type="radio" name="relacaoAssociacao" value="fraca" onChange={handleChange} /> Relação Fraca</label>
            <label><input className={styles.campoInput} type="radio" name="relacaoAssociacao" value="forte" onChange={handleChange} /> Relação Forte</label>

            <label>C22. O seu trabalho proporcionou alguma parceria com instituições ou organizações?</label>
            <label><input className={styles.campoInput} type="radio" name="parceriasInstituicoes" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="parceriasInstituicoes" value="nao" onChange={handleChange} /> Não</label>
            <label>Se sim, quais? <input className={styles.campoInput} type="checkbox" name="quaisParcerias" value="governo" onChange={handleChange} /> Governo
                <input className={styles.campoInput} type="checkbox" name="quaisParcerias" value="ongs" onChange={handleChange} /> ONGs
                <input className={styles.campoInput} type="checkbox" name="quaisParcerias" value="empresas" onChange={handleChange} /> Empresas
                <input className={styles.campoInput} type="checkbox" name="quaisParcerias" value="universidade" onChange={handleChange} /> Universidade
                <input className={styles.campoInput} type="checkbox" name="quaisParcerias" value="outro" onChange={handleChange} /> Outro <input className={styles.campoInput} type="text" name="outroParcerias" onChange={handleChange} /></label>

            <label>C23. Tem alguma parte do seu trabalho que você faz junto com sua família?</label>
            <label><input className={styles.campoInput} type="radio" name="trabalhoFamilia" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="trabalhoFamilia" value="nao" onChange={handleChange} /> Não</label>
            <label>Se sim, você acha que esse trabalho
                <input className={styles.campoInput} type="radio" name="impactoFamilia" value="melhorar" onChange={handleChange} /> Faz melhorar
                <input className={styles.campoInput} type="radio" name="impactoFamilia" value="naoFazDiferenca" onChange={handleChange} /> Não faz diferença
                <input className={styles.campoInput} type="radio" name="impactoFamilia" value="piorar" onChange={handleChange} /> Faz piorar a relação com a família? Por quê?
                <input className={styles.campoInput} type="text" name="porqueImpactoFamilia" onChange={handleChange} /></label>

            <label>C24. Tem alguma parte do seu trabalho que você faz junto com as pessoas da sua comunidade ou de outras comunidades?</label>
            <label><input className={styles.campoInput} type="radio" name="trabalhoComunidade" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="trabalhoComunidade" value="nao" onChange={handleChange} /> Não</label>
            <label>Se sim, você acha que esse trabalho
                <input className={styles.campoInput} type="radio" name="impactoComunidade" value="melhorar" onChange={handleChange} /> Faz melhorar
                <input className={styles.campoInput} type="radio" name="impactoComunidade" value="naoFazDiferenca" onChange={handleChange} /> Não faz diferença
                <input className={styles.campoInput} type="radio" name="impactoComunidade" value="piorar" onChange={handleChange} /> Faz piorar a relação com os moradores? Por quê?
                <input className={styles.campoInput} type="text" name="porqueImpactoComunidade" onChange={handleChange} /></label>
        </fieldset>
    );
}

export default BlocoRelacaoParceirosInstituicoes;

