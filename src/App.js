import React from 'react';
import './App.scss';
import ChannelList from './containers/ChannelList';
import MessageList from './containers/MessageList';
import MessageForm from './containers/MessageForm';


function App() {
  const style = { width: "50px", marginTop: "10px" };
  const image_source = "https://dwj199mwkel52.cloudfront.net/assets/lewagon-logo-square-fe76916e1b923ade71e253ae6dc031d936e5e8eebac4e26b0fbac650ea6ee360.png";

  return (
    <div className="App">
      <div className="logo">
        <img src={image_source} style={style} alt="Le Wagon"/>
      </div>
      <div className="channel-list">
        <ChannelList />
      </div>
      <div className="message-list">
        <MessageList />
        <MessageForm />
      </div>
    </div>
  );
}

export default App;
