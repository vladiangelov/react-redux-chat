import React from 'react';
import Message from '../components/Message';
import { connect } from 'react-redux';

const MessageList = (props) => {
  return(
    <div>
      {props.messages.map((message) => {
        return <Message message={message} />
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
