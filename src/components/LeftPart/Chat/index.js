import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from './bubble';
import Suggestions from '../Suggestions';
import { requestServer } from '../../../BotAPI';
import Input from './Input';
import './style.css';

import axios from 'axios';

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

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.userMessage) {
      const { userMessage, messages } = this.state;
      const { onArtistSearch } = this.props;
      let newMessage = {content: userMessage, type: "user", key: messages.length}
      messages.push(newMessage)
      this.setState({messages, userMessage: ''})

      let request = requestServer(userMessage, (response) => {

          const search = {
            action: response.result.action,
            title: response.result.parameters.title,
          }

              console.log(search);

          if (search.title && search.action === "action.music.search.artist") {
              const artist = onArtistSearch(search.title);
              const messageContent = 'Cette chanson est interprétée par ' + artist.name+'.';

              newMessage = {content: messageContent, type: "bot", key: messages.length}
              messages.push(newMessage)
              this.setState({messages})

          } else if (search.title && search.action === "action.music.infos.artist") {

          } else {

              newMessage = {content: response.result.fulfillment.speech, type: "bot", key: messages.length}
              messages.push(newMessage)
              this.setState({messages})

          }
      });
    } else {
      return false;
    }
  }

  render() {

      const { messages, userMessage } = this.state;

    return (
      <div className="Content" ref={(el) => { this.messagesEnd = el; }}>
          {messages.length > 0 &&
            messages.map( msg => {
              return(
                <Bubble key={msg.key} type={msg.type} text={msg.content} />
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
