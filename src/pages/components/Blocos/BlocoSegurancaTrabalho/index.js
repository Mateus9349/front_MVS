import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoSegurancaTrabalho = ({ setDados }) => {

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
            <legend>DIMENSÃO H5 - Segurança do trabalho</legend>

            <label>C17. Existem riscos/perigos no seu trabalho?</label>
            <label><input className={styles.campoInput} type="radio" name="riscosTrabalho" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="riscosTrabalho" value="nao" onChange={handleChange} /> Não</label>
            <label>Se sim, quais os principais riscos? <input className={styles.campoInput} type="text" name="principaisRiscosTrabalho" onChange={handleChange} /></label>

            <label>C18. Você já fez algum treinamento sobre segurança no trabalho?</label>
            <label><input className={styles.campoInput} type="radio" name="treinamentoSegurancaTrabalho" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="treinamentoSegurancaTrabalho" value="nao" onChange={handleChange} /> Não Qual? <input className={styles.campoInput} type="text" name="qualTreinamentoSegurancaTrabalho" onChange={handleChange} /></label>

            <label>C19. Você utiliza algum equipamento ou vestimenta para proteção? Com que frequência?</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentoProtecao" value="sempre" onChange={handleChange} /> Sempre</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentoProtecao" value="asVezes" onChange={handleChange} /> Às vezes</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentoProtecao" value="nunca" onChange={handleChange} /> Nunca Quais? <input className={styles.campoInput} type="text" name="quaisEquipamentoProtecao" onChange={handleChange} /></label>
        </fieldset>
    );
}

export default BlocoSegurancaTrabalho;

