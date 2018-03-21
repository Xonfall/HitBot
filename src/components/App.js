import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble';
import { requestServer } from '../BotAPI';
import Input from './Input';

class App extends Component {

    state = {
        message: null,
        userMessage: null
    }

    getTextArea = (text) => {
        this.setState({userMessage: text});
    }

    componentWillMount() {
        let request = requestServer('Qui chante la macarena', (response) => {
            let result = response.result.fulfillment.speech;
            this.setState({message: result});
        });
    }

    handleSubmit(event) {
        event.preventDefault();
      }

    render() {

        const { userMessage } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to Hit!</h1>
                    </header>
                    <div className="Content">
                        <Bubble type="user" text="" />
                        <Bubble type="bot" text={this.state.message} />

                        <Input getTextArea={this.getTextArea}/>
                    </div>
                </div>
            </form>
        );
    }
}
export default App;