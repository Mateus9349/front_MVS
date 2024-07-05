import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoInfraestruturaColetivaProducao = ({ setDados }) => {

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
            <legend>P2. Infraestrutura coletiva de produção</legend>

            <label>C46a. Na sua comunidade existe equipamentos utilizados no trabalho com a madeira e com os óleos?</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentosComunidade" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentosComunidade" value="nao" onChange={handleChange} /> Não</label>

            <label>C47b. Esses equipamentos são utilizados?</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentosUtilizados" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentosUtilizados" value="nao" onChange={handleChange} /> Não Por quê? <input className={styles.campoInput} type="text" name="motivoEquipamentosNaoUtilizados" onChange={handleChange} /></label>

            <label>C48c. Esses equipamentos estão em que lugar/espaço?</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentosLugar" value="espacoComumComunidade" onChange={handleChange} /> Espaço comum da comunidade</label>
            <label><input className={styles.campoInput} type="radio" name="equipamentosLugar" value="espacoMoradorComunidade" onChange={handleChange} /> Espaço de um morador da comunidade</label>

            <label>C49d. Todo mundo respeita o espaço e tempo de trabalho do outro?</label>
            <label><input className={styles.campoInput} type="radio" name="respeitoEspacoTempo" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="respeitoEspacoTempo" value="nao" onChange={handleChange} /> Não</label>

            <label>C50.Você tem facilidade em transportar os produtos do local de coleta até o local de armazenamento ou onde os equipamentos estão?</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeTransportarProdutosColetaArmazenamento" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeTransportarProdutosColetaArmazenamento" value="nao" onChange={handleChange} /> Não Por quê? <input className={styles.campoInput} type="text" name="motivoTransporteProdutosColetaArmazenamento" onChange={handleChange} /></label>

            <label>C51. Você tem facilidade em transportar os produtos do local de armazenamento até o local de venda?</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeTransportarProdutosArmazenamentoVenda" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeTransportarProdutosArmazenamentoVenda" value="nao" onChange={handleChange} /> Não Por quê? <input className={styles.campoInput} type="text" name="motivoTransporteProdutosArmazenamentoVenda" onChange={handleChange} /></label>
        </fieldset>
    );
}

export default BlocoInfraestruturaColetivaProducao;