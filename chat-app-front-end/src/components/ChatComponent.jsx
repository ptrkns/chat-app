import React, { useContext } from 'react';
import '../styles/ChatComponent.css';
import Messages from './Messages.jsx';
import UserContext from './UserContext';

function ChatComponent() {

    const { userName } = useContext(UserContext);

    return (
        <>
            <div className='ChatContainer-Parent'>
                <div className='ChatContainer-Header'>
                    <p>{userName}</p>
                    <button>Log out</button>
                </div>

                <div className='ChatContainer-Body'>
                    <Messages/>
                </div>

                <div className='ChatContainer-Input'>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
        </>
    )
};

export default ChatComponent;
