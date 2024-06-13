import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChatComponent.css';
import Message from './Message.jsx';
import UserContext from './UserContext';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

function ChatComponent() {

    const { userName } = useContext(UserContext);
    const navigate = useNavigate();
    const socketIO = socketIOClient('http://localhost:3001');
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState('');
    const currentChat = chatMessages.map((chatMessages, index) => {
        if(chatMessages.user === userName) { return <Message type='sent' key={index} userName={chatMessages.user} message={chatMessages.message}/>; }
        else { return <Message type='received' key={index} userName={chatMessages.user} message={chatMessages.message}/>; }
    });

    useEffect(() => {
        if(!userName) { navigate('/'); }
        else return;
    }, [userName]);

    useEffect(() => {
        socketIO.on('chat', (m) => { setChatMessages(m); });
    }, [chatMessages]);

    const sendToSocket = (chat) => { socketIO.emit('chat', chat); };

    const sendMessage = (e) => {
        e.preventDefault();
        const newChat = {...{message}, user: userName}

        setChatMessages([...chatMessages, newChat]);
        sendToSocket([...chatMessages, newChat]);

        setMessage('');
    };

    return (
        <>
            <div className='ChatContainer-Parent'>
                <div className='ChatContainer-Header'>
                    <p>{userName}</p>
                    <Link to='/' className='Link-Button'>Log out</Link>
                </div>

                <div className='ChatContainer-Body'> {currentChat} </div>

                <form className='ChatContainer-Input' onSubmit={sendMessage}>
                    <textarea required value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </>
    );
};

export default ChatComponent;
