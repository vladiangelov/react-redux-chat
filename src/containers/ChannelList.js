import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, setMessages } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectChannel: selectChannel,
      setMessages: setMessages },
    dispatch
  )
}

const ChannelList = (props) => {
  const handleClick = (channel) => {
    props.selectChannel(channel);
    props.setMessages(channel);
  }
  return(
    <div>
      <h2>Redux Chat</h2>
      {props.channels.map((channel) => {
        let style = ""
        if (channel === props.selectedChannel) {
          style += "active-channel";
        }
        return <p className={style} key={channel} onClick={() => handleClick(channel)}>#{channel}</p>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
