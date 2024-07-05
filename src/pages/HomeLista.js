import NavBar from "./components/NavBar";
import CardModo from "./components/CardModo";

import styles from '../styles/HomeMVS.module.scss';

export default function HomeLista() {
    return (
        <main>
            <NavBar />
            <div className={styles.container}>
                <CardModo
                    title='Exibir ações'
                    text='Verifique os dados das listas já salvas'
                    href={'/Acoes'}
                />

                <CardModo
                    title='Salvar ação'
                    text='Salvar informações da ação no banco de dados'
                    href={'/Lista'}
                />

                <CardModo
                    title='Resultados'
                    text='Exibir resultados de das  ações'
                    href={'/ResultadoLista'}
                />
            </div>
        </main>
    )
}