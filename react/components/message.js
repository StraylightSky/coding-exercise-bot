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
      'receive': this.props.msg.type === 0,
      'sent': this.props.msg.type === 1
    });

    let senderClasses = cx({
      'receiver': this.props.msg.type === 0,
      'sender': this.props.msg.type === 1
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