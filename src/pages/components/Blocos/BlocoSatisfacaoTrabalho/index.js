import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoSatisfacaoTrabalho = ({ setDados }) => {

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
            <legend>DIMENSÃO H4 - Satisfação com o trabalho</legend>

            <label>C12. Você está satisfeito com o lugar onde trabalha?</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoLocalTrabalho" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoLocalTrabalho" value="nenhum" onChange={handleChange} /> Nenhum dos dois</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoLocalTrabalho" value="nao" onChange={handleChange} /> Não</label>

            <label>C13. Você está satisfeito com os benefícios materiais que o seu trabalho traz?</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoBeneficiosTrabalho" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoBeneficiosTrabalho" value="nenhum" onChange={handleChange} /> Nenhum dos dois</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoBeneficiosTrabalho" value="nao" onChange={handleChange} /> Não, estou aprendendo bastante</label>

            <label>C14. Está satisfeito com as pessoas que trabalham junto com você?</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoPessoasTrabalho" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoPessoasTrabalho" value="nenhum" onChange={handleChange} /> Nenhum dos dois</label>
            <label><input className={styles.campoInput} type="radio" name="satisfacaoPessoasTrabalho" value="nao" onChange={handleChange} /> Não</label>

            <label>C15. Você se sente reconhecido por causa do seu trabalho?</label>
            <label><input className={styles.campoInput} type="radio" name="reconhecimentoTrabalho" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="reconhecimentoTrabalho" value="nao" onChange={handleChange} /> Não Por quê? <input className={styles.campoInput} type="text" name="naoReconhecimentoTrabalho" onChange={handleChange} /></label>

            <label>C16. Você acha que seu trabalho pode te ajudar a melhorar de vida?</label>
            <label><input className={styles.campoInput} type="radio" name="melhorarVidaTrabalho" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="melhorarVidaTrabalho" value="nao" onChange={handleChange} /> Não Por quê? <input className={styles.campoInput} type="text" name="naoMelhorarVidaTrabalho" onChange={handleChange} /></label>
        </fieldset>

    );
}

export default BlocoSatisfacaoTrabalho;

