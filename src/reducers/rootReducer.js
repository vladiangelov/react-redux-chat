import { combineReducers } from 'redux';
import channelsReducer from './channelsReducer';
import selectedChannelReducer from './selectedChannelReducer';

const rootReducer = combineReducers({
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer
});

export default rootReducer;
