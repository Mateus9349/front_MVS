import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoSegurancaAlimentar = ({ setDados }) => {

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
            <legend>DIMENSÃO HUMANA - H1. Segurança alimentar da família</legend>

            <label>C01. Grande parte da sua alimentação vem de onde?</label>
            <label><input className={styles.campoInput} type="radio" name="origemAlimentacao" value="propriedade" onChange={handleChange} /> Da sua propriedade</label>
            <label><input className={styles.campoInput} type="radio" name="origemAlimentacao" value="merceariaComunidade" onChange={handleChange} /> Da mercearia da comunidade</label>
            <label><input className={styles.campoInput} type="radio" name="origemAlimentacao" value="mercadoForaComunidade" onChange={handleChange} /> Do mercado de fora da comunidade</label>

            <label>C02. Você gasta dinheiro para comprar alimentos em mercearias da comunidade ou em supermercados na cidade?</label>
            <label><input className={styles.campoInput} type="radio" name="gastaDinheiroAlimentos" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="gastaDinheiroAlimentos" value="nao" onChange={handleChange} /> Não</label>
            <label>Se sim, diga os principais alimentos comprados: Arroz, feijão, café, açúcar, sal, macarrão.</label>

            <label>C03. Você acha que tem acesso regular a alimentos de qualidade?</label>
            <label><input className={styles.campoInput} type="radio" name="acessoAlimentosQualidade" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="acessoAlimentosQualidade" value="nao" onChange={handleChange} /> Não</label>

            <label>C04. Você usa o dinheiro que ganha com sua atividade para comprar alimentos que ajudem no seu bem-estar alimentar?</label>
            <label><input className={styles.campoInput} type="radio" name="usoDinheiroAlimentos" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="usoDinheiroAlimentos" value="nao" onChange={handleChange} /> Não</label>
        </fieldset>

    );
}

export default BlocoSegurancaAlimentar;

