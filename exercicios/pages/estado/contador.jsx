import { useState } from "react"

export default function contador() {

    const[count, setCount] = useState(0)

    function incrementarValor() {
        setCount(count + 1)
    }

    function decrementarValor() {
        setCount(count - 1)
    }

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    return(
        <div style={estilo}>
            <h1>Contador</h1>
            <div>Valor</div>
            <div>{count}</div>
            <div>
                <button onClick={decrementarValor}>-</button>
                <button onClick={incrementarValor}>+</button>
            </div>
        </div>
    )

}