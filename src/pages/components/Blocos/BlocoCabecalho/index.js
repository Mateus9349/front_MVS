import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoCabecalho = ({ setDadosCabecalho }) => {

    const handleChange = (e) => {
        setDadosCabecalho((prevDadosCabecalho) => ({
            ...prevDadosCabecalho,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <fieldset className={styles.secao}>
            <legend>Cabeçalho</legend>

            <label>Identificador da entrevista: </label>
            <input
                className={styles.campoInput}
                type="text"
                name="identificadorEntrevista"
                onChange={handleChange}
            />

            <label>Entrevistador: </label>
            <input
                className={styles.campoInput}
                type="text"
                name="entrevistador"
                onChange={handleChange}
            />

            <label>Data: </label>
            <input
                className={styles.campoInput}
                type="date"
                name="dataEntrevista"
                onChange={handleChange}
            />

            <label>Duração da entrevista: </label>
            <input
                className={styles.campoInput}
                type="text"
                name="duracaoEntrevista"
                onChange={handleChange}
            />

            <label>Nome do entrevistado</label>
            <input
                className={styles.campoInput}
                type="text"
                name="nomeEntrevistado"
                onChange={handleChange}
            />
        </fieldset>
    );
}

export default BlocoCabecalho;
