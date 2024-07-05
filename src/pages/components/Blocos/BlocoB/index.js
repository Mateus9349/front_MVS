import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoB = ({ setDados }) => {

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
            <legend>Bloco B</legend>

            <label>Você tem celular ou telefone fixo?</label>
            <select className={styles.campoInput} name="telefone" onChange={handleChange}>
                <option value="sim">SIM</option>
                <option value="nao">NÃO</option>
            </select>

            <label>Você usa computador?</label>
            <select className={styles.campoInput} name="usaComputador" onChange={handleChange}>
                <option value="sim">SIM</option>
                <option value="nao">NÃO</option>
            </select>

            <label>Você tem acesso à internet?</label>
            <select className={styles.campoInput} name="acessoInternet" onChange={handleChange}>
                <option value="sim">SIM</option>
                <option value="nao">NÃO</option>
            </select>

            <label>Como é a conexão com a internet?</label>
            <select className={styles.campoInput} name="conexaoInternet" onChange={handleChange}>
                <option value="horaQueQuero">Eu tenho internet a hora que eu quero</option>
                <option value="asVezes">Às vezes eu consigo acesso à internet</option>
                <option value="irPraConseguir">Eu tenho que ir para algum lugar para conseguir entrar na internet</option>
            </select>

            <label>ONDE?<input className={styles.campoInput} type="text" name="localConexaoInternet" placeholder="Digite o local" onChange={handleChange} /></label>

            <label>Você conhece os programas ou projetos do governo voltados ao trabalho com a madeira, com os óleos e sementes, pesca e agricultura familiar?</label>
            <select className={styles.campoInput} name="conheceProgramas" onChange={handleChange}>
                <option value="sim">SIM</option>
                <option value="nao">NÃO</option>
            </select>

            <label>Quais?<input className={styles.campoInput} type="text" name="quaisProgramas" onChange={handleChange} /></label>

            <label>Você participa de algum deles?</label>
            <select className={styles.campoInput} name="participaProgramas" onChange={handleChange}>
                <option value="sim">SIM</option>
                <option value="nao">NÃO</option>
            </select>

            <label>Se SIM, preencher as perguntas seguintes</label>

            <label>Como está sua satisfação com os programas/projetos do governo?</label>
            <select name="satisfacaoProgramas" onChange={handleChange}>
                <option value="muitoSatisfeito">Muito satisfeito</option>
                <option value="satisfeito">Satisfeito</option>
                <option value="indiferente">Indiferente</option>
                <option value="insatisfeito">Insatisfeito</option>
                <option value="muitoInsatisfeito">Muito insatisfeito</option>
            </select>

            <label>Por quê?<textarea name="porqueInsatisfacao" onChange={handleChange}></textarea></label>

            <label>O que você espera do Projeto Inatú Amazônia do Idesam?<textarea name="expectativasProjeto" onChange={handleChange}></textarea></label>

            <label>Como está sua satisfação com o Projeto Inatú Amazônia?</label>
            <select name="satisfacaoProjeto" onChange={handleChange}>
                <option value="muitoSatisfeito">Muito satisfeito</option>
                <option value="satisfeito">Satisfeito</option>
                <option value="indiferente">Indiferente</option>
                <option value="insatisfeito">Insatisfeito</option>
                <option value="muitoInsatisfeito">Muito insatisfeito</option>
            </select>
        </fieldset>
    );
}

export default BlocoB;

