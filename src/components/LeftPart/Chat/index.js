import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from './bubble';
import Suggestions from '../Suggestions';
import { requestServer } from '../../../BotAPI';
import Input from './Input';
import './style.css';

class Chat extends Component {

  static propTypes = {
      onArtistSearch: PropTypes.func.isRequired,
   };

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
    const { onArtistSearch } = this.props;
    let newMessage = {content: userMessage, type: "user", key: messages.length}
    messages.push(newMessage)
    onArtistSearch(userMessage);
    this.setState({messages, userMessage: ''})

    let request = requestServer(userMessage, (response) => {
        let result = response.result.fulfillment.speech;
        newMessage = {content: result, type: "bot", key: messages.length}
        messages.push(newMessage)
        this.setState({messages})
    });
  }

  render() {

      const { messages, userMessage } = this.state;

    return (
      <div className="Content">
        <div className="MessagesContent">
            {messages.length > 0 &&
              messages.map( msg => {
                return(
                  <Bubble key={msg.key} type={msg.type} text={msg.content} />
                );
              })
            }
          {/*}<Suggestions />*/}
        </div>
        <form onSubmit={this.handleSubmit}>
            <Input value={userMessage} getTextArea={this.getTextArea}/>
        </form>
      </div>
    );
  }
}

export default Chat;
