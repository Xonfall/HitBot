import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  getTextArea: PropTypes.func.isRequired,
}

class Voice extends Component {

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <button onClick={resetTranscript}><i className="fa fa-microphone"></i></button>
    )
  }
}

Voice.propTypes = propTypes

export default SpeechRecognition({autoStart: true})(Voice)
