import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                {/* <h3 className={styles.text}>apoio:</h3> */}
                <div className={styles.containerImg}>
                    <img className={styles.img} src='/assets/idesam.svg' />
                    <img className={styles.img} src='/assets/BNDS.svg' />
                </div>
            </footer>
        </>
    )
}