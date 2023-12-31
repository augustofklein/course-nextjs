// Componente baseado em função
export function Comp1() {
    return(
        <div>
            <h2>Comp #01</h2>
        </div>
    )
}

// Componente baseado em função
export const Comp2 = function() {
    return <h2>Comp #02</h2>
}

// Componente exportado por padrão
// OBS: Somente deve haver uma função exportada por padrão
//      pois caso contrário o react não entende qual a função
//      que deverá ser utilizada.
export default function() {
    return(
        <div>
            <h2>Comp #03</h2>
        </div>
    )
}

// Componente baseado arrow function
export const Comp4 = () => {
    return <h2>Comp #04</h2>
}

// Componente baseado arrow function
const Comp5 = () => <h2>Comp #05</h2>

const Comp6 = props => (
    <div>
        <h2>Comp #06 - {props.msg}</h2>
    </div>
)

// Podemos definir aexportação dos componentes
// no final do arquivo
export {
    Comp5, Comp6
}