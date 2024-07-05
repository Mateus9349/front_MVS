import CardModo from "./components/CardModo";
import NavBar from "./components/NavBar";

import styles from '../styles/HomeMVS.module.scss';
import Footer from "./components/Footer";

export default function HomeMVS() {
    return (
        <main>
            <NavBar />
            <div className={styles.container}>
                <CardModo
                    title='Importar csv'
                    text='Faça Upload da planilha final ou entrevista individual e veja os gráficos.'
                    href={'/MVS'}
                />

                {/* <CardModo
                    title='Realizar entrevista'
                    text={'Formulario de entrevista online, armazenar entrevista individual no banco de dados.'}
                    href={'/Entrevista'}
                /> */}

                <CardModo
                    title={'Gráficos'}
                    text={'Acessar os gráficos de resultados.'}
                    href={'/Graficos'}
                />
            </div>
        </main>
    )
}