import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import useAuth from '@/data/hook/useAuth'
import router from 'next/router'

interface ForcarAutenticacaoProps {
    children?:any
}

export default function ForcarAutenticacao(props: ForcarAutenticacaoProps) {

    const { carregando, usuario } = useAuth()

    type RenderizarConteudoProps = {
        children?: any
      };

    function renderizarConteudo() {
        return(
            <>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return(
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} alt=""/>
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null
    }

}