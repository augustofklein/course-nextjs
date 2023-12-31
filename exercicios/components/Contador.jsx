import { Component } from "react";

export default class Contador extends Component {

    /*
        A expresão ?? garante que caso o valor não seja inicializado
        o mesmo receba o valor 0.
    */
    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    alterarPasso = () => {
        this.setState({ passo: +ev.target.value })
    }
    
    renderForm() {
        return(
            <>
                <input type="number" min={1} max={1000}
                    value={this.state.passo}
                    onChange={this.alterarPasso}/>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        )
    }

    render() {
        return(
            <div>
                <h1>Contador(usando classe)</h1>
                <h1>{this.state.numero}</h1>
                {this.renderForm()}
            </div>
        )
    }

}