import React from 'react';
import ReactDOM from 'react-dom';
import './src/style.css';
import Step1 from './step1';


class Start extends React.Component {
    constructor() {
        super();

        this.setState({
            hide: false
            }
        )
    }

    onClick(){
        this.setState({
            hide: true
        });
    }

    render() {
        return (
            <main>
                <h1>Read Books</h1>
                <p>Create your account to get started. After that,<br />
                    you can share books and make friends.</p>
                <button onClick={this.onClick.bind(this)}> --> </button>
            </main>
        );
    }
}

window.render = function render(){
    ReactDOM.render((
        <div>
            <Start />
            <Step1 />
        </div>
    ), document.getElementById('root'));
};

render();