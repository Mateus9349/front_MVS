import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoAcessoLinhasCredito = ({ setDados }) => {

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
            <legend>F4 Acesso a linhas de crédito</legend>

            <label>C66. Você conhece alguma linha de crédito (bancário ou do governo) acessível a você?</label>
            <label><input className={styles.campoInput} type="radio" name="conheceLinhaCredito" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="conheceLinhaCredito" value="nao" onChange={handleChange} /> Não</label>

            <label>C67. Você já fez uso de alguma linha de crédito?</label>
            <label><input className={styles.campoInput} type="radio" name="usoLinhaCredito" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="usoLinhaCredito" value="nao" onChange={handleChange} /> Não</label>

            <label>C68. A sua comunidade ou Associação faz uso de linhas de crédito?</label>
            <label><input className={styles.campoInput} type="radio" name="usoComunidadeLinhaCredito" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="usoComunidadeLinhaCredito" value="nao" onChange={handleChange} /> Não</label>
            <label><input className={styles.campoInput} type="radio" name="usoComunidadeLinhaCredito" value="naoSei" onChange={handleChange} /> Não Sei</label>
        </fieldset>

    );
}

export default BlocoAcessoLinhasCredito;