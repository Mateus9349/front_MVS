import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoInfraestruturaIndividualFamiliar = ({ setDados }) => {

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
            <legend>P3. Infraestrutura individual/familiar</legend>

            <label>C52. Nos últimos 2 (dois) anos você conseguiu comprar coisas novas pra casa e família?</label>
            <label><input className={styles.campoInput} type="radio" name="comprasUltimosDoisAnos" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="comprasUltimosDoisAnos" value="nao" onChange={handleChange} /> Não</label>

            <label>C52.a. Com dinheiro de quais atividades?</label>
            <input className={styles.campoInput} type="text" name="dinheiroAtividadesCompras" onChange={handleChange} />

            <label>C53. Em relação ao transporte, você acha que tem facilidade sair da sua casa e ir ao centro da cidade?</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeTransporteCidade" value="nao" onChange={handleChange} /> Não</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeTransporteCidade" value="sim" onChange={handleChange} /> Sim Por quê? <input className={styles.campoInput} type="text" name="motivoFacilidadeTransporteCidade" onChange={handleChange} /></label>
        </fieldset>

    );
}

export default BlocoInfraestruturaIndividualFamiliar;