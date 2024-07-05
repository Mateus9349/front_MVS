import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoConservacaoDaFloresta = ({ setDados }) => {

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
            <legend>A2. Conservação da floresta</legend>

            <label>C35.Você considera que na sua região a floresta está, com o passar do tempo:</label>
            <label><input className={styles.campoInput} type="radio" name="estadoFloresta" value="aumentando" onChange={handleChange} /> Aumentando</label>
            <label><input className={styles.campoInput} type="radio" name="estadoFloresta" value="seMantendo" onChange={handleChange} /> Se mantendo</label>
            <label><input className={styles.campoInput} type="radio" name="estadoFloresta" value="diminuindo" onChange={handleChange} /> Diminuindo</label>

            <label>C36A. Você acha que o seu trabalho está contribuindo para aumentar e manter a floresta?</label>
            <label><input className={styles.campoInput} type="radio" name="contribuicaoTrabalhoFloresta" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="contribuicaoTrabalhoFloresta" value="nao" onChange={handleChange} /> Não Como? <input className={styles.campoInput} type="text" name="comoContribuicaoTrabalhoFloresta" onChange={handleChange} /></label>

            <label>C37. Você utiliza alguma espécie de planta da floresta em sua atividade</label>
            <label><input className={styles.campoInput} type="radio" name="utilizaEspecieFloresta" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="utilizaEspecieFloresta" value="nao" onChange={handleChange} /> Não</label>

            <label>X08.Se sim, a disponibilidade dessa espécie vem ao longo do tempo:</label>
            <label><input className={styles.campoInput} type="radio" name="disponibilidadeEspecieTempo" value="aumentando" onChange={handleChange} /> Aumentando</label>
            <label><input className={styles.campoInput} type="radio" name="disponibilidadeEspecieTempo" value="seMantendo" onChange={handleChange} /> Se mantendo</label>
            <label><input className={styles.campoInput} type="radio" name="disponibilidadeEspecieTempo" value="diminuindo" onChange={handleChange} /> Diminuindo</label>
        </fieldset>

    );
}

export default BlocoConservacaoDaFloresta;

