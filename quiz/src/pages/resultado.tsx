import Estatistica from '@/components/Estatistica'
import styles from '../styles/Resultado.module.css'
import { useRouter } from 'next/router'
import Botao from '@/components/Botao'

export default function Resultado() {
    
    const router = useRouter()

    const total = router.query.total ? +router.query.total : 0
    const certas = router.query.certas ? +router.query.certas : 0
    const percentual = Math.round((certas / total) * 100)

    console.log(router.query.total)
    console.log(router.query.certas)
    
    return(
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{ display: 'flex' }}>
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica
                    texto="Certas"
                    valor={certas}
                    corFundo='#9CD2A4'
                />
                <Estatistica
                    texto="Percentual"
                    valor={`${percentual}%`}
                    corFundo='#DE6A33'
                />
            </div>
            <Botao href='/' texto='Tentar Novamente' />
        </div>
    )
}