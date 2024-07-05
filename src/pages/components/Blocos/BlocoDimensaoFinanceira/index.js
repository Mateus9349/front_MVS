import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoDimensaoFinanceira = ({ setDados }) => {

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
            <legend>DIMENSÃO FINANCEIRA</legend>

            <label>F1. Capital de giro e rendimentos</label>

            <label>C54. Hoje em dia você guarda dinheiro para atender as necessidades da(s) sua(s) atividade(s)?</label>
            <label><input className={styles.campoInput} type="radio" name="guardaDinheiroAtividades" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="guardaDinheiroAtividades" value="nao" onChange={handleChange} /> Não</label>

            <label>C55. Hoje em dia você acha que a Associação, Cooperativa ou Usina de óleos guarda dinheiro para atender as necessidades da(s) atividade(s)?</label>
            <label><input className={styles.campoInput} type="radio" name="guardaDinheiroAssociacao" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="guardaDinheiroAssociacao" value="nao" onChange={handleChange} /> Não</label>

            <label>C56. Hoje em dia você acha que os ganhos mensais em dinheiro cobrem os gastos das atividades da Associação, Cooperativa ou Usina?</label>
            <label><input className={styles.campoInput} type="radio" name="coberturaGastosAssociacao" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="coberturaGastosAssociacao" value="nao" onChange={handleChange} /> Não</label>

            <label>C57. Hoje em dia os seus ganhos mensais em dinheiro cobrem os gastos das suas atividades?</label>
            <label><input className={styles.campoInput} type="radio" name="coberturaGastosIndividuais" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="coberturaGastosIndividuais" value="nao" onChange={handleChange} /> Não</label>

            <label>C58. Hoje em dia você tem dívidas financeiras com pessoas ou instituições?</label>
            <label><input className={styles.campoInput} type="radio" name="dividasFinanceiras" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="dividasFinanceiras" value="nao" onChange={handleChange} /> Não</label>

            <label>C59. Hoje em dia você tem a capacidade de pagar essas dívidas?</label>
            <label><input className={styles.campoInput} type="radio" name="capacidadePagarDividas" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="capacidadePagarDividas" value="nao" onChange={handleChange} /> Não</label>
        </fieldset>

    );
}

export default BlocoDimensaoFinanceira;