import React from 'react';
import { connect } from 'react-redux';

const ChannelList = (props) => {
  return(
    <div>
      <h2>Redux Chat</h2>
      {props.channels.map((channel) => {
        let style = ""
        if (channel === props.selectedChannel) {
          style += "active-channel";
        }
        return <p className={style}>#{channel}</p>
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

export default connect(mapStateToProps)(ChannelList);
