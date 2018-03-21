import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble';
import { requestServer } from '../BotAPI';

class App extends Component {

    state = {
        message: null,
        userMessage: null
    }

    componentWillMount() {
        let request = requestServer('Qui chante la macarena', (response) => {
            let result = response.result.fulfillment.speech;
            this.setState({message: result});
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Hit!</h1>
                </header>
                <div className="Content">
                    <Bubble type="user" text="" />
                    <Bubble type="bot" text={this.state.message} />
                    <textarea className="Textarea" onchange={this.handleChange}></textarea>
                </div>
            </div>
        );
    }
}
export default App;