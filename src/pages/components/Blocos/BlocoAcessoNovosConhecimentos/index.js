import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoAcessoNovosConhecimentos = ({ setDados }) => {

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
            <legend>DIMENSÃO H3 - Acesso a novos conhecimentos</legend>

            <label>C08. Como você aprendeu a maioria das coisas que precisa para realizar seu trabalho/atividade?</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoTrabalho" value="familia" onChange={handleChange} /> Família</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoTrabalho" value="vizinhosAmigos" onChange={handleChange} /> Vizinhos ou amigos</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoTrabalho" value="instituicoesLocais" onChange={handleChange} /> Instituições locais</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoTrabalho" value="sozinho" onChange={handleChange} /> Sozinho</label>
            <label><input className={styles.campoInput} type="checkbox" name="aprendizadoTrabalho" value="outro" onChange={handleChange} /> Outro</label>
            <label>Se outro, especificar: <input className={styles.campoInput} type="text" name="outroAprendizadoTrabalho" onChange={handleChange} /></label>

            <label>C09. Você já recebeu assistência técnica ou realizou algum curso, treinamento, oficina ou intercâmbio para sua atividade?</label>
            <label><input className={styles.campoInput} type="radio" name="assistenciaTecnica" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="assistenciaTecnica" value="nao" onChange={handleChange} /> Não</label>
            <label>Quais? <input className={styles.campoInput} type="text" name="quaisAssistenciaTecnica" onChange={handleChange} /></label>

            <label>C10. Você tem feito na prática algum aprendizado novo?</label>
            <label><input className={styles.campoInput} type="radio" name="aprendizadoNovo" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="aprendizadoNovo" value="planos" onChange={handleChange} /> Ainda não, mas tem planos</label>
            <label><input className={styles.campoInput} type="radio" name="aprendizadoNovo" value="nao" onChange={handleChange} /> Não</label>
            <label>Quais? <input className={styles.campoInput} type="text" name="quaisAprendizadoNovo" onChange={handleChange} /></label>

            <label>C11. Com quais pessoas você costuma conversar sobre sua atividade?</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="comunidade" onChange={handleChange} /> Pessoas da minha comunidade</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="outrasComunidades" onChange={handleChange} /> Pessoas de outras comunidades (abrir caixa para colocar nomes/apelidos)</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="extensionista" onChange={handleChange} /> Extensionista</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="idesam" onChange={handleChange} /> IDESAM</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="idam" onChange={handleChange} /> IDAM</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="sema" onChange={handleChange} /> SEMA</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="ipaam" onChange={handleChange} /> IPAAM</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="compradores" onChange={handleChange} /> Compradores</label>
            <label><input className={styles.campoInput} type="checkbox" name="pessoasConversa" value="ninguem" onChange={handleChange} /> Ninguém</label>
        </fieldset>
    );
}

export default BlocoAcessoNovosConhecimentos;

