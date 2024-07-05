import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoDimensaoFisica = ({ setDados }) => {

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
            <legend>DIMENSÃO FÍSICA</legend>

            <label>P1. Infraestrutura individual de produção</label>

            <label>C42. Você possui equipamentos e materiais próprios para desenvolver sua(s) atividade(s)?</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentosProprios" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentosProprios" value="nao" onChange={handleChange} /> Não</label>

            <label>C44. Você tem facilidade em deslocar seus produtos até o ponto de venda pelas vias de acesso (rios, ramais, estradas) do local onde mora?</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeDeslocarProdutos" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeDeslocarProdutos" value="maisOuMenos" onChange={handleChange} /> Mais ou menos</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeDeslocarProdutos" value="naoDificilAcesso" onChange={handleChange} /> Não difícil acesso</label>

            <label>C45. Tem alguma coisa faltando pra você poder trabalhar melhor?</label>
            <label><input className={styles.campoInput} type="radio" name="faltaTrabalharMelhor" value="nao" onChange={handleChange} /> Não</label>
            <label><input className={styles.campoInput} type="radio" name="faltaTrabalharMelhor" value="sim" onChange={handleChange} /> Sim O que? <input className={styles.campoInput} type="text" name="oQueFaltaTrabalharMelhor" onChange={handleChange} /></label>
        </fieldset>
    );
}

export default BlocoDimensaoFisica;