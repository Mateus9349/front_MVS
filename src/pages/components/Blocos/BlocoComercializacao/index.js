import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoComercializacao = ({ setDados }) => {

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
            <legend>F3. Comercialização</legend>

            <label>C61.Você tem controle do quanto você gasta para produzir seus produtos?</label>
            <label><input className={styles.campoInput} type="radio" name="controleGastosProducao" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="controleGastosProducao" value="nao" onChange={handleChange} /> Não</label>

            <label>X09.Como você faz esse controle? (Anota num caderno ou pede pra alguém anotar, não anota, faz de cabeça)</label>
            <label><input className={styles.campoInput} type="text" name="controleGastosProducaoMetodo" onChange={handleChange} /> </label>

            <label>C62.Atualmente você vende seus produtos para quem?</label>
            <label><input className={styles.campoInput} type="radio" name="publicoAlvoVendas" value="empresasInstituicoes" onChange={handleChange} /> Empresas e Instituições públicas ou privadas</label>
            <label><input className={styles.campoInput} type="radio" name="publicoAlvoVendas" value="feirasAtravessadores" onChange={handleChange} /> Feiras da região e/ou atravessadores</label>
            <label><input className={styles.campoInput} type="radio" name="publicoAlvoVendas" value="osDois" onChange={handleChange} /> Os dois</label>

            <label>C63. Atualmente o retorno financeiro com as vendas dos produtos são:</label>
            <label><input className={styles.campoInput} type="radio" name="retornoFinanceiroVendas" value="maisAltos" onChange={handleChange} /> Mais altos</label>
            <label><input className={styles.campoInput} type="radio" name="retornoFinanceiroVendas" value="nenhumDosDois" onChange={handleChange} /> Nenhum dos dois</label>
            <label><input className={styles.campoInput} type="radio" name="retornoFinanceiroVendas" value="maisBaixos" onChange={handleChange} /> Mais baixos</label>

            <label>C64. Quem diz o preço do seu produto é você ou o comprador?</label>
            <label><input className={styles.campoInput} type="radio" name="quemDefinePreco" value="euAssociacao" onChange={handleChange} /> Eu/Associação</label>
            <label><input className={styles.campoInput} type="radio" name="quemDefinePreco" value="comprador" onChange={handleChange} /> Comprador</label>

            <label>C65. Quando você tem os produtos para venda sempre consegue vender?</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeVenderSempre" value="sim" onChange={handleChange} /> Sim, vendo</label>
            <label><input className={styles.campoInput} type="radio" name="facilidadeVenderSempre" value="naoVendo" onChange={handleChange} /> Não vendo</label>
        </fieldset>
    );
}

export default BlocoComercializacao;