import React from 'react';
import cx from 'classnames';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let textClasses = cx({
      'message': true,
      'receive': this.props.msg.sender === 'Rick',
      'sent': this.props.msg.sender === 'Me'
    });

    let senderClasses = cx({
      'receiver': this.props.msg.sender === 'Rick',
      'sender': this.props.msg.sender === 'Me'
    });

    return (
      <div>
        <div className={senderClasses}>{this.props.msg.sender}</div>
        <br className="clearfix" />
        <div className={textClasses}>{this.props.msg.text}</div>
        <br className="clearfix" />
      </div>
    );
  }
}