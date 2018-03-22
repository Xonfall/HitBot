import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from './bubble';
import Suggestions from '../Suggestions';
import { doSearch, getSongs, getArtist, getLyrics } from '../../../GeniusAPI';
import { requestServer } from '../../../BotAPI';
import Input from './Input';
import './style.css';

class Chat extends Component {
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

      // const search = getArtist('Booba');
      // const songs = doSearch('Booba');

      const { messages, userMessage } = this.state;

    return (
      <div className="Content">
          {messages.length > 0 &&
            messages.map( msg => {
              return(
                <Bubble type={msg.type} text={msg.content} />
              );
            })
          }
        {/*}<Suggestions />*/}
        <form onSubmit={this.handleSubmit}>
            <Input value={userMessage} getTextArea={this.getTextArea}/>
        </form>
      </div>
    );
  }
}

export default Chat;
