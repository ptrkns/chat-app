import React from 'react';
import '../styles/Messages.css';
import profile from '../assets/profile.png';

function Messages() {
    function Message(props) {

        const className = props.type === 'sent' ? "sentMessage" : "receivedMessage";

        return (
            <div className={className}>
                <img src={profile} alt='profile picture'/>
                <div className={`${className}-Content`}>
                    <p className='UserName'>Username</p>
                    <p className='Message'>Hello user! This is a message from the other account. I'd like to see how longer messages look on the UI at the moment.</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='Message-Container'>
                <Message type="sent"/>
                <Message type="received"/>
            </div>
        </>
    )
}

export default Messages;