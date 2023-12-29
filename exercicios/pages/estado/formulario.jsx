import { useState } from "react";

export default function formulario() {

    const [valor, setValor] = useState("inicial")

    function alterarInput() {
        setValor(valor + "!")
    }

    return(
        <div>
            <input type="text" value={valor}
                onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )

}