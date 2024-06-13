import React, { useContext, useEffect, useState } from 'react';
import '../styles/ChatComponent.css';
import Message from './Message.jsx';
import UserContext from './UserContext';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

function ChatComponent() {

    const { userName } = useContext(UserContext);
    const socketio = socketIOClient('http://localhost:3001');
    const [chat, setChat] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        socketio.on('chat', (messages) => {
            setChat(messages);
        });
    });

    const sendToSocket = (chat) => {
        socketio.emit('chat', chat);
    }

    const sendMessage = () => {
        addMessage({message});
        setMessage('');
    }

    const addMessage = (message) => {
        const newChat = {...message, user: userName}
        setChat([...chat, newChat]);
        sendToSocket([...chat, newChat]);
    }

    return (
        <>
            <div className='ChatContainer-Parent'>
                <div className='ChatContainer-Header'>
                    <p>{userName}</p>
                    <Link to='/' className='Link-Button'>Log out</Link>
                </div>

                <div className='ChatContainer-Body'>
                    {chat.map((chat, index) => {
                        if(chat.user === userName) {
                            return <Message type='sent' key={index} userName={chat.user} message={chat.message}/>
                        }
                        else {
                            return <Message type='received' key={index} userName={chat.user} message={chat.message}/>
                        }
                    })}
                </div>

                <div className='ChatContainer-Input'>
                    <textarea onChange={(e) => setMessage(e.target.value)}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    )
};

export default ChatComponent;
