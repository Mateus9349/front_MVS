import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoConservacaoManejoFaunaSilvestre = ({ setDados }) => {

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
            <legend>A3. Conservação e manejo da fauna silvestre</legend>

            <label>C38. Você tem facilidade em encontrar animais como cutias, pacas, veados, cobras, onças e outros nas regiões próximas da comunidade?</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeEncontrarAnimais" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeEncontrarAnimais" value="maisOuMenos" onChange={handleChange} /> mais ou menos</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeEncontrarAnimais" value="nao" onChange={handleChange} /> Não Por quê? <input className={styles.campoInput} type="text" name="motivoNaoEncontrarAnimais" onChange={handleChange} /></label>

            <label>C39. Você caça para consumo próprio?</label>
            <label><input className={styles.campoInput} type="radio" name="cacaConsumoProprio" value="nao" onChange={handleChange} /> Não</label>
            <label><input className={styles.campoInput} type="radio" name="cacaConsumoProprio" value="sim" onChange={handleChange} /> Sim</label>

            <label>C40. Você se sente impedido em caçar?</label>
            <label><input className={styles.campoInput} type="radio" name="impedimentoCaca" value="sim" onChange={handleChange} /> Sim Quais os motivos que te impedem de caçar? <input className={styles.campoInput} type="text" name="motivosImpedimentoCaca" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="radio" name="impedimentoCaca" value="nao" onChange={handleChange} /> Não</label>

            <label>C41. Você acha que atividades como o manejo de madeira e de óleos ajudarão na conservação dos animais?</label>
            <label><input className={styles.campoInput} type="radio" name="ajudaConservacaoAnimais" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="ajudaConservacaoAnimais" value="nao" onChange={handleChange} /> Não Por quê? <input className={styles.campoInput} type="text" name="motivoNaoAjudarConservacaoAnimais" onChange={handleChange} /></label>
        </fieldset>

    );
}

export default BlocoConservacaoManejoFaunaSilvestre;

