'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './components/messages';
import TextInput from './components/text-input';

class ChatArea extends React.Component {
  render() {
    return (
      <div>
        <Messages />
        <TextInput />
      </div>
    );
  }
}

ReactDOM.render(<ChatArea />, document.getElementById('chatArea'));
