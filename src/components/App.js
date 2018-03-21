import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble';
import { requestServer } from '../BotAPI';
import Input from './Input';

class App extends Component {

    state = {
        message: null,
        messages: [],
        userMessage: "",
    }

    getTextArea = (text) => {
        this.setState({userMessage: text});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { userMessage, messages } = this.state;
      let newMessage = {content: userMessage, type: "user"}
      messages.push(newMessage)
      this.setState({messages, userMessage: ''})

      let request = requestServer(userMessage, (response) => {
          let result = response.result.fulfillment.speech;
          newMessage = {content: result, type: "bot"}
          messages.push(newMessage)
          this.setState({messages})
      });
    }

    render() {

        const { messages, userMessage } = this.state;

        return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to Hit!</h1>
                    </header>
                    <div className="Content">
                        {messages.length > 0 &&
                          messages.map( msg => {
                            return(
                              <Bubble type={msg.type} text={msg.content} />
                            );
                          })
                        }
                      <form onSubmit={this.handleSubmit}>
                          <Input value={userMessage} getTextArea={this.getTextArea}/>
                      </form>
                    </div>
                </div>
        );
    }
}
export default App;
