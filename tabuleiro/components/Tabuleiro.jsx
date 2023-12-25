import Linha from '../components/Linha'
import styles from '../styles/Linha.module.css'

export default function Tabuleiro() {

    return(
        <div>
            <Linha/>
            <Linha preta/>
            <Linha/>
            <Linha preta/>
            <Linha/>
            <Linha preta/>
            <Linha/>
            <Linha preta/>
        </div>
    )

}