import React from 'react';
import styles from '../../FormMVS/FormMVS.module.css';

const BlocoDadosPessoais = ({ setDadosPessoais }) => {

    const handleChange = (e) => {
        setDadosPessoais((prevDadosPessoais) => ({
            ...prevDadosPessoais,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <fieldset className={styles.secao}>
            <legend>Dados pessoais</legend>

            {/* Cidade de Nascimento */}
            <label>Em qual cidade você nasceu:</label>
            <input
                className={styles.campoInput}
                type="text"
                name="cidadeNascimento"
                onChange={handleChange}
            />

            {/* Estado de Nascimento */}
            <label>Qual Estado:</label>
            <input
                className={styles.campoInput}
                type="text"
                name="estadoNascimento"
                onChange={handleChange}
            />

            {/* Cidade Atual */}
            <label>Qual município você mora hoje em dia:</label>
            <input
                className={styles.campoInput}
                type="text"
                name="cidadeAtual"
                onChange={handleChange}
            />

            {/* Localidade Atual */}
            <label>Qual nome da localidade onde mora hoje:</label>
            <input
                className={styles.campoInput}
                type="text"
                name="localidadeAtual"
                onChange={handleChange}
            />

            {/* Tempo Morando no Local */}
            <label>Quanto tempo mora no local:</label>
            <input
                className={styles.campoInput}
                type="text"
                name="tempoMoraLocal"
                onChange={handleChange}
            />

            {/* Idade */}
            <label>Idade:</label>
            <input
                className={styles.campoInput}
                type="number"
                name="idade"
                onChange={handleChange}
            />

            {/* Estado Civil */}
            <label>Estado civil:</label>
            <select
                className={styles.campoInput}
                name="estadoCivil"
                onChange={handleChange}
            >
                <option value="solteiro">Solteiro</option>
                <option value="moraJunto">Mora Junto</option>
                <option value="casado">Casado</option>
                <option value="separado">Separado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viuvo">Viúvo</option>
            </select>

            {/* Filhos */}
            <label>Filhos:</label>
            <select
                className={styles.campoInput}
                name="temFilhos"
                onChange={handleChange}
            >
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>

            {/* Se tem filhos, quantidade */}
            <label>Se sim, quantos:</label>
            <input
                className={styles.campoInput}
                type="number"
                name="quantidadeFilhos"
                onChange={handleChange}
            />

            {/* Nível de Escolaridade */}
            <label>Escolaridade:</label>
            <select
                className={styles.campoInput}
                name="nivelEscolaridade"
                onChange={handleChange}
            >
                <option value="naoEstudou">Não estudou</option>
                <option value="alfabetizacao">Alfabetização</option>
                <option value="1a4Serie">Da 1ª a 4ª série "Antigo primário"</option>
                <option value="5a8Serie">5ª a 8ª série "Antigo ginásio"</option>
                <option value="ensinoMedioIncompleto">Ensino médio "2º grau" incompleto</option>
                <option value="ensinoMedioCompleto">Ensino médio "2º grau" completo</option>
                <option value="cursoTecnico">Curso técnico</option>
                <option value="ensinoSuperiorIncompleto">Ensino superior incompleto</option>
                <option value="ensinoSuperiorCompleto">Ensino superior completo</option>
            </select>
        </fieldset>
    );
}

export default BlocoDadosPessoais;
