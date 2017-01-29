import React from 'react';
import Message from './message';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      convo: [
        {text: 'sup, nerd', sender: 'rick'},
        {text: 'rick, i-i-i don\'t think it\'s polite to c-call a random stranger a nerd', sender: 'morty'},
        {text: 'whatever, morty. look at \'em, th-they\'re obv-*buuuurp*-iously a nerd', sender: 'rick'}
      ]
    };
  }

  render() {
    let messages = this.state.convo.map((message, i) => {
      return <Message msg={message} key={i} />
    });

    return (
      <div className="container">
        {messages}
      </div>
    );
  }
}

export default Messages;
