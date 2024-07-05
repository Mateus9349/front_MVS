import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoParticipacaoMulher = ({ setDados }) => {

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
            <legend>DIMENSÃO SOCIAL - S3. Participação da mulher nas atividades produtivas</legend>

            <label>C29. Qual trabalho você acha que a mulher deve desempenhar?</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="cuidarCasa" onChange={handleChange} /> Cuidar da casa</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="cuidarHorta" onChange={handleChange} /> Cuidar da horta e/ou quintal</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="plantioRoca" onChange={handleChange} /> Plantio de roça</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="processamentoProdutos" onChange={handleChange} /> Processamento de produtos</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="criacaoAnimais" onChange={handleChange} /> Criação de animais</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="cuidarFilhos" onChange={handleChange} /> Cuidar dos filhos</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="atividadesMadeireira" onChange={handleChange} /> Atividades com a produção madeireira</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="atividadesExtrativismo" onChange={handleChange} /> Atividades com extrativismo</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="trabalhoQueQuiser" onChange={handleChange} /> O trabalho que ela quiser</label>
            <label><input className={styles.campoInput} type="checkbox" name="trabalhoMulher" value="outras" onChange={handleChange} /> Outras</label>
            <label>Quais? <input className={styles.campoInput} type="text" name="outrasTrabalhoMulher" onChange={handleChange} /></label>

            <label>C30. Você percebe a participação das mulheres na mesma atividade que a sua?</label>
            <label><input className={styles.campoInput} type="radio" name="participacaoMulherAtividade" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="participacaoMulherAtividade" value="nao" onChange={handleChange} /> Não</label>

            <label>C05. Se sim, elas possuem tarefas:</label>
            <label><input className={styles.campoInput} type="radio" name="tarefasMulher" value="iguais" onChange={handleChange} /> Tarefas iguais as dos homens</label>
            <label><input className={styles.campoInput} type="radio" name="tarefasMulher" value="diferentes" onChange={handleChange} /> Tarefas diferente dos homens Quais tarefas? <input className={styles.campoInput} type="text" name="quaisTarefasMulher" onChange={handleChange} /></label>

            <label>C06A. Se possuem as mesmas tarefas, elas recebem o mesmo valor que os homens?</label>
            <label><input className={styles.campoInput} type="radio" name="valorIgualMulher" value="sim" onChange={handleChange} /> Sim</label>
            <label><input className={styles.campoInput} type="radio" name="valorIgualMulher" value="nao" onChange={handleChange} /> Não</label>

            <label>C06B. O valor que elas recebem:</label>
            <label><input className={styles.campoInput} type="radio" name="valorRecebidoMulher" value="maior" onChange={handleChange} /> Valor maior do que os homens</label>
            <label><input className={styles.campoInput} type="radio" name="valorRecebidoMulher" value="igual" onChange={handleChange} /> Valor igual ao dos homens</label>
            <label><input className={styles.campoInput} type="radio" name="valorRecebidoMulher" value="menor" onChange={handleChange} /> Valor menor que o dos homens</label>

            <label>C31. Você acha que a Associação/Cooperativa incentiva a participação das mulheres nas atividades?</label>
            <label><input className={styles.campoInput} type="radio" name="incentivoParticipacaoMulher" value="sim" onChange={handleChange} /> Sim Como? <input className={styles.campoInput} type="text" name="comoIncentivoParticipacaoMulher" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="radio" name="incentivoParticipacaoMulher" value="simMelhorar" onChange={handleChange} /> Sim, mas pode melhorar Como? <input className={styles.campoInput} type="text" name="comoMelhorarIncentivoParticipacaoMulher" onChange={handleChange} /></label>
            <label><input className={styles.campoInput} type="radio" name="incentivoParticipacaoMulher" value="nao" onChange={handleChange} /> Não Por quê? <input className={styles.campoInput} type="text" name="porqueNaoIncentivoParticipacaoMulher" onChange={handleChange} /></label>
        </fieldset>

    );
}

export default BlocoParticipacaoMulher;

