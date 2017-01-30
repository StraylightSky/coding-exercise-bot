import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message';
import axios from 'axios';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      convo: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let convoCopy = this.state.convo;

    axios.post('/api/v1/message', {
      text: this.state.value
    })
    .then((response) => {
      convoCopy.push({text: response.data, sender: 'Rick'})

      this.setState({convo: convoCopy});
    })
    .catch((error) => {
      console.log(error);
    });

    convoCopy.push({text: this.state.value, sender: 'Me'});

    this.setState({convo: convoCopy, value: ''});
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
  }

  // Lifecylce methods
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    let messages = this.state.convo.map((message, i) => {
      return <Message msg={message} key={i} />
    });

    return (
      <div className="chat">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="messages-header">
            <div className="conversation-info">
              <img src={'../assets/img/rick.jpg'} className="img" alt="picture of rick sanchez" />
              <h4 className="bot-name">Rick Sanchez</h4>
              <br className="clearfix"/>
            </div>
          </div>
          <div className="messages-container">
            {messages}
            <div className="scroll-to-me" ref={(el) => { this.messagesEnd = el; }}></div>
          </div>
          <div className="input-container">
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} 
              placeholder="Type your message here..." />
            <button type="submit" className="btn">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Messages;
