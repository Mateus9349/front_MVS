import Link from "../Link";

import styles from './CardModo.module.scss'

export default function CardModo({title, text, href}) {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            <Link text={'Acessar'} href={href}/>
        </div>
    )
}