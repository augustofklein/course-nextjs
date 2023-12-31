import { useEffect, useState } from "react";
import DisplayNumero from "../../components/indireta1/displayNumero";
import { mega } from '../../functions/mega'

export default function megaSena() {

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    /*
    Devemos utilizar o useEffect para realizar mudanças seguras
    no estado do componente sem realizar renderizações repetidas

    Ex: Se utilizarmos o código setNumeros(mega()) dentro do componente
        sem o uso do useEffect será gerado um erro pois irão ser gerados
        valores repetidos a cada instante, ficando em loop infinito.

    */
    
    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderizarNumeros() {
        return numeros.map(
            numero => <DisplayNumero key={numero} numero={numero} />
        )
    }

    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <h1>Mega Sena</h1>
            <div style={
                    {display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
            }}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde}
                    onChange={ev => setQtde(ev.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )

}