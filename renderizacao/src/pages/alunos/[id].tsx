export async function getStaticPaths() {
    const resp = await fetch('http://localhost:3000/api/alunos/tutores')
    const ids = await resp.json()

    const paths = ids.map((id: any) => {
        return { params: { id: `${id}` } }
    })

    return {
        fallback: true, // false = 404
        paths
    }
}

export async function getStaticProps(context: any) {
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await resp.json()

    return {
        props: {}
    }
}

export default function AlunoPorId(props: any) {
    
    const { aluno } = props
    
    return(
        <div>
            <h1>Detalhes do Aluno</h1>
            {aluno ? 
                <ul>
                    <li>{aluno.id}</li>
                    <li>{aluno.nome}</li>
                    <li>{aluno.email}</li>
                </ul>
            : false
            }
        </div>
    )
}