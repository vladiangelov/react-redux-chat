import { combineReducers } from 'redux';
import channelsReducer from './channelsReducer';
import selectedChannelReducer from './selectedChannelReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer
});

export default rootReducer;
