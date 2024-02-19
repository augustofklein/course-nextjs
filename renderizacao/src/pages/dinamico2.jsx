export async function getServerSideProps() {
    /*Teste para verificar que a busca das informações ocorre no lado do servidor*/
    console.log('[Server] gerando props para o componente...')
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props) {
    
    /*Teste para verificar que o coneúdo é renderizado no lado do cliente*/
    console.log('[Cliente] Renderizando o componente...')

    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return <li key={produto.id}>
                {produto.id} - {produto.nome} tem preço de R${produto.preco}</li>
        })
    }
    
    return(
        <div>
            <h1>Estático #04</h1>
            {renderizarProdutos()}
        </div>
    )
}