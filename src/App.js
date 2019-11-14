import React, { useState } from 'react';
import NewMessageForm from './components/NewMessageForm'
import MessageList from './components/MessageList'
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div className="App">
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
}

export default App;
