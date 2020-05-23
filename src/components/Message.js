import React from 'react';

const Message = (props) => {
  return (
    <div>
      <p>{props.message.author}{props.message.created_at}</p>
      <div>{props.message.content}</div>
    </div>
  )
}

export default Message;
