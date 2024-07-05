import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoValorizacaoConhecimentoEcologico = ({ setDados }) => {

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
            <legend>DIMENSÃO H2 - Uso e valorização do conhecimento ecológico tradicional/local</legend>

            <label>C05. Como você aprende sobre as coisas da natureza? (Ex.: reconhecer plantas, saber onde encontrá-las, saber a época certa de coletar os frutos)</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoNatureza" value="familia" onChange={handleChange} /> Família</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoNatureza" value="vizinhosAmigos" onChange={handleChange} /> Vizinhos ou amigos</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoNatureza" value="instituicoesLocais" onChange={handleChange} /> Instituições locais</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoNatureza" value="sozinho" onChange={handleChange} /> Sozinho</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoNatureza" value="outro" onChange={handleChange} /> Outro</label>
            <label>Se outro, especificar: <input className={styles.campoInput} type="text" name="outroAprendizadoNatureza" onChange={handleChange} /></label>

            <label>C06. Você usa estes conhecimentos no dia a dia do seu trabalho?</label>
            <label><input className={styles.campoInput} type="radio" name="usoConhecimentosTrabalho" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="usoConhecimentosTrabalho" value="nao" onChange={handleChange} /> Não</label>

            <label>C07. Você está passando esses conhecimentos para alguém (por exemplo, filhos)?</label>
            <label><input className={styles.campoInput} type="radio" name="transmissaoConhecimentos" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="transmissaoConhecimentos" value="nao" onChange={handleChange} /> Não</label>
            <label>Para quem? <input className={styles.campoInput} type="text" name="quemTransmissaoConhecimentos" onChange={handleChange} /></label>
        </fieldset>

    );
}

export default BlocoValorizacaoConhecimentoEcologico;

