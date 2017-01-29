import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="row">
        <div>{this.props.msg.sender}</div>
        <div className="message">{this.props.msg.text}</div>
      </div>
    );
  }
}