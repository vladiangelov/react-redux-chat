import React from 'react';

const Message = (props) => {
  let date = new Date(props.message.created_at);
  return (
    <div className="message">
      <p><strong>{props.message.author}</strong> {date.toLocaleTimeString('en-US')}</p>
      <p>{props.message.content}</p>
    </div>
  )
}

export default Message;
