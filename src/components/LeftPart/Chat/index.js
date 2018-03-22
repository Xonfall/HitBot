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

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
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
    this.scrollToBottom();
  }

  render() {

      // const search = getArtist('Booba');
      // const songs = doSearch('Booba');

      const { messages, userMessage } = this.state;

    return (
      <div className="Content" ref={(el) => { this.messagesEnd = el; }}>
          {messages.length > 0 &&
            messages.map( msg => {
              return(
                <Bubble type={msg.type} text={msg.content} />
              );
            })
          }
        {/*}<Suggestions />*/}
        <form className='chatUser' onSubmit={this.handleSubmit}>
            <Input value={userMessage} getTextArea={this.getTextArea}/>
            <input type='submit' value='Envoyer'/>
            <button></button>
        </form>
      </div>
    );
  }
}

export default Chat;
