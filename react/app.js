'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './components/text-input';

class ChatArea extends React.Component {
  render() {
    return (
      <TextInput />
    );
  }
}

ReactDOM.render(<ChatArea />, document.getElementById('chatArea'));
