import { useState } from "react";

export default function Form() {
    
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    async function salvarUsuario() {
        fetch('api/form', {
            method: 'POST',
            body: JSON.stringify({ nome, idade })
        })

        setNome("")
        setIdade(0)

        const resp = await fetch('/api/form')
        const usuarios = await resp.json()
        setUsuarios(usuarios)
    }

    function renderizarUsuarios() {
        return usuarios.map((usuarios, i) => {
            return <li key={i}>{usuarios.nome} tem {usuarios.idade} anos</li>
        })
    }

    return(
        <div>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <input type="number" value={idade} onChange={e => +setIdade(e.target.value)} />
            <button onClick={salvarUsuario}>Enviar</button>
            <ul>{renderizarUsuarios()}</ul>
        </div>
    )

}