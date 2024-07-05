import RadarChart from "../RadarChart";

import styles from './SectionGraficos.module.scss';

const SectionGraFicos = ({ humana, ambiental, social, fisica, financeira }) => {
    return (
        <section className={styles.container}>
            <RadarChart
                title={'Dimensão Humana'}
                labels={['H1', 'H2', 'H3', 'H4', 'H5']}
                values={humana}
            />

            <RadarChart
                title={'Dimensão Ambiental'}
                labels={['A1', 'A2', 'A3']}
                values={ambiental}
            />

            <RadarChart
                title={'Dimensão Social'}
                labels={['S1', 'S2', 'S3']}
                values={social}
            />

            <RadarChart
                title={'Dimensão Fisica'}
                labels={['P1', 'P2', 'P3']}
                values={fisica}
            />

            <RadarChart
                title={'Dimensão Financeira'}
                labels={['F1', 'F2', 'F3', 'F4']}
                values={financeira}
            />
        </section>
    )
}

export default SectionGraFicos;