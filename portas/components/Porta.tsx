import PortaModel from '../model/porta'
import styles from '../src/styles/Porta.module.css'
import Presente from './Presente'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {

    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    function alternarSelecao() {
        props.onChange(porta.alterarSelecao())
    }

    const abrirPorta = (e: React.MouseEvent) => {
        props.onChange(porta.abrir())
        e.stopPropagation()
    }

    function renderizarPorta() {
        return(
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrirPorta}></div>
            </div>
            
        )
    }

    return(
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ?
                    renderizarPorta() :
                    porta.temPresente ? <Presente/> : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )

}