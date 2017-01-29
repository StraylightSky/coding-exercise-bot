import React from 'react';
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
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let convoCopy = this.state.convo;

    axios.post('/api/v1/message', {
      text: this.state.value
    })
    .then((response) => {
      convoCopy.push({text: response.data, sender: 'rick'})

      this.setState({convo: convoCopy});
    })
    .catch((error) => {
      console.log(error);
    });

    convoCopy.push({text: this.state.value, sender: 'me'});

    this.setState({convo: convoCopy});
  }

  render() {
    let messages = this.state.convo.map((message, i) => {
      return <Message msg={message} key={i} />
    });

    return (
      <div>
        <div className="container">
          {messages}
        </div>
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <button className="btn" onClick={this.handleSubmit.bind(this)}>Send</button>
        </div>
      </div>
    );
  }
}

export default Messages;
