import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoDimensaoAmbiental = ({ setDados }) => {

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
            <legend>A1 DIMENSÃO AMBIENTAL</legend>

            <label>C32. Os materiais utilizados para seu trabalho/atividade você tira da natureza ou são comprados de fora?</label>
            <label><input className={styles.campoInput} type="radio" name="origemMateriais" value="natureza" onChange={handleChange} /> Natureza</label>
            <label><input className={styles.campoInput} type="radio" name="origemMateriais" value="parteCompradoParteNatureza" onChange={handleChange} /> Parte comprado parte natureza</label>
            <label><input className={styles.campoInput} type="radio" name="origemMateriais" value="comprados" onChange={handleChange} /> Comprados</label>

            <label>C33. Existe algum período do ano em que não realiza sua atividade principal?</label>
            <label><input className={styles.campoInput} type="radio" name="periodoSemAtividade" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="periodoSemAtividade" value="nao" onChange={handleChange} /> Não</label>

            <label>X07. (Se sim) Por quanto tempo você não realiza a atividade?</label>
            <label><input className={styles.campoInput} type="radio" name="tempoSemAtividade" value="1-2Meses" onChange={handleChange} /> 1 a 2 meses</label>
            <label><input className={styles.campoInput} type="radio" name="tempoSemAtividade" value="3-4Meses" onChange={handleChange} /> 3 a 4 meses</label>
            <label><input className={styles.campoInput} type="radio" name="tempoSemAtividade" value="5-6Meses" onChange={handleChange} /> 5 a 6 meses</label>
            <label><input className={styles.campoInput} type="radio" name="tempoSemAtividade" value="maisDe6Meses" onChange={handleChange} /> mais de 6 meses</label>

            <label>C34.Sua atividade atrapalha de alguma forma a atividade de outra pessoa?</label>
            <label><input className={styles.campoInput} type="radio" name="atrapalhaOutraPessoa" value="sempre" onChange={handleChange} /> Sempre</label>
            <label><input className={styles.campoInput} type="radio" name="atrapalhaOutraPessoa" value="asVezes" onChange={handleChange} /> Às vezes</label>
            <label><input className={styles.campoInput} type="radio" name="atrapalhaOutraPessoa" value="nunca" onChange={handleChange} /> Nunca</label>
        </fieldset>
    );
}

export default BlocoDimensaoAmbiental;

