'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './components/messages';

class ChatArea extends React.Component {
  render() {
    return (
      <div>
        <Messages />
      </div>
    );
  }
}

ReactDOM.render(<ChatArea />, document.getElementById('chatArea'));
