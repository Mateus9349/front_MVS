import Button from "../Button";
import styles from './SectionBucarMVS.module.scss';

export default function SectionBuscarMVS({ onChange, onChange2, onClick }) {
    return (
        <section className={styles.container}>
            <label>Inicio</label>
            <input type="date" onChange={onChange} />

            <label>Final</label>
            <input type="date" onChange={onChange2} />
            <Button text={'Buscar'} onClick={onClick} />
        </section>
    )
}
