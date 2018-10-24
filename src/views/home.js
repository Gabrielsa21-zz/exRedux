import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import { callActionButton } from '../redux/actions/buttonAction';
import { connect } from 'react-redux';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit = (e) => {
        console.log("function")
        e.preventDefault()
        //"action é basicamente ações do usuario")
        //se o usuario clicou no botao gerou uma ação")
        //para saber mais google.com rs")
        //brincadeira kkk bom continuando...")
        this.props.dispatch(callActionButton());
    }
    render() {
        console.log(this.props)
        // const { handleSubmit, previousPage, onSubmit} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <button onClick={(e) => this.onSubmit(e)}>Redux</button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
                {/* {this.props.bnt} */}
                
                {/* apos o click veja o redux funcionando! it's easy */}
            </div>
        )
    }
}


export default connect(state => {
    return {
        bnt: state.bnt
    }
})(Home);