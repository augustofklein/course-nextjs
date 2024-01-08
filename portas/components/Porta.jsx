import styles from '../src/styles/Porta.module.css'

export default function Porta() {

    return(
        <div className={styles.area}>
            <div className={styles.estrutura}>
                <div className={styles.porta}>
                    <div className={styles.numero}>2</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )

}