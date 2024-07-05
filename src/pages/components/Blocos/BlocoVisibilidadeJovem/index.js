import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoVisibilidadeJovem = ({ setDados }) => {

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
            <legend>DIMENSÃO SOCIAL - S2. Visibilidade para os jovens</legend>

            <label>C25. Você acha que os jovens participam das decisões tomadas nas reuniões da Associação/Cooperativa da sua comunidade?</label>
            <label><input className={styles.campoInput} type="radio" name="participacaoJovensDecisoes" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="participacaoJovensDecisoes" value="maisOuMenos" onChange={handleChange} /> Mais ou menos</label>
            <label><input className={styles.campoInput} type="radio" name="participacaoJovensDecisoes" value="nao" onChange={handleChange} /> Não</label>

            <label>C26. Os jovens frequentam as escolas da comunidade ou as escolas fora da comunidade?</label>
            <label><input className={styles.campoInput} type="radio" name="escolasJovens" value="comunidade" onChange={handleChange} /> Escolas da comunidade</label>
            <label><input className={styles.campoInput} type="radio" name="escolasJovens" value="foraComunidade" onChange={handleChange} /> Escolas de fora da comunidade</label>
            <label><input className={styles.campoInput} type="radio" name="escolasJovens" value="osDois" onChange={handleChange} /> Os dois</label>

            <label>C27. Você acha que os jovens são envolvidos nas atividades que produzem renda?</label>
            <label><input className={styles.campoInput} type="radio" name="envolvimentoJovensRenda" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="envolvimentoJovensRenda" value="maisOuMenos" onChange={handleChange} /> Mais ou menos</label>
            <label><input className={styles.campoInput} type="radio" name="envolvimentoJovensRenda" value="nao" onChange={handleChange} /> Não</label>

            <label>C28. Você acha que o Projeto Inatú Amazônia vai trazer renda aos jovens?</label>
            <label><input className={styles.campoInput} type="radio" name="projetoInatuRendaJovens" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="projetoInatuRendaJovens" value="maisOuMenos" onChange={handleChange} /> Mais ou menos</label>
            <label><input className={styles.campoInput} type="radio" name="projetoInatuRendaJovens" value="nao" onChange={handleChange} /> Não</label>
        </fieldset>

    );
}

export default BlocoVisibilidadeJovem;

