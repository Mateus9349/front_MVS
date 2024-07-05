import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoPrecoProdutos = ({ setDados }) => {

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
            <legend>F2. Preço dos produtos</legend>

            <label>C60. Assinale se você concorda ou discorda com as seguintes frases em relação ao preço do seu produto/serviço.</label>

            <label>Y04. “O preço que é pago pelo produto/serviço é bom”</label>
            <label><input className={styles.campoInput} type="radio" name="precoBom" value="concordo" onChange={handleChange} /> Concordo</label>
            <label><input className={styles.campoInput} type="radio" name="precoBom" value="naoSei" onChange={handleChange} /> Não sei</label>
            <label><input className={styles.campoInput} type="radio" name="precoBom" value="discordo" onChange={handleChange} /> Discordo</label>

            <label>Y05. “O meu pagamento pelo trabalho compensa o que eu gasto para produzir”</label>
            <label><input className={styles.campoInput} type="radio" name="pagamentoCompensaGastos" value="concordo" onChange={handleChange} /> Concordo</label>
            <label><input className={styles.campoInput} type="radio" name="pagamentoCompensaGastos" value="naoSei" onChange={handleChange} /> Não sei</label>
            <label><input className={styles.campoInput} type="radio" name="pagamentoCompensaGastos" value="discordo" onChange={handleChange} /> Discordo</label>

            <label>Y06. “Quem faz um produto com melhor qualidade, ou presta um serviço melhor consegue vender por um preço maior”</label>
            <label><input className={styles.campoInput} type="radio" name="qualidadePreco" value="concordo" onChange={handleChange} /> Concordo</label>
            <label><input className={styles.campoInput} type="radio" name="qualidadePreco" value="naoSei" onChange={handleChange} /> Não sei</label>
            <label><input className={styles.campoInput} type="radio" name="qualidadePreco" value="discordo" onChange={handleChange} /> Discordo</label>
        </fieldset>
    );
}

export default BlocoPrecoProdutos;