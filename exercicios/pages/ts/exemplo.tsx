import Pessoa from '../../components/Pessoa'

export default function exemploTs() {
    return(
        <div>
            <Pessoa nome="João" idade={18}/>
            <Pessoa nome="Maria"/>
        </div>
    )
}