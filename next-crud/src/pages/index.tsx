import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import Cliente from '../core/Cliente'
import Tabela from '@/components/Tabela'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 29, '2'),
    new Cliente('Carlos', 22, '3'),
    new Cliente('João', 78, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Exluir ${cliente.nome}`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <div className='flex justify-end'>
          <Botao cor='green' className="mb-4">Novo Cliente</Botao>
        </div>
        
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />

        <Formulario cliente={clientes[0]}>

        </Formulario>

      </Layout>
    </div>
  )
}