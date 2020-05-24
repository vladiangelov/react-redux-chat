import React from 'react';
import Message from '../components/Message';
import { connect } from 'react-redux';

const MessageList = (props) => {
  return(
    <div>
    <div><h3>Channel #{props.selectedChannel}</h3></div>
      {props.messages.map((message) => {
        return <Message message={message} />
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(MessageList);
