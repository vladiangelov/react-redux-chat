import React, { Component } from 'react';
import Message from '../components/Message';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMessages } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  )
}

class MessageList extends Component {
  componentDidMount() {
    this.props.setMessages();
  }

  render() {
    return(
      <div>
        <div className="channel-title">
          <h3>Channel #{this.props.selectedChannel}</h3>
        </div>
        {this.props.messages.map((message) => {
          return <Message message={message} key={message.created_at} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
