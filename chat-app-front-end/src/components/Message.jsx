import React from 'react';
import '../styles/Message.css';
import profile from '../assets/profile.png';

function Message(props) {

    const className = props.type === 'sent' ? "sentMessage" : "receivedMessage";

    return (
        <>
            <div className='Message-Container'>
                <div className={className} id='Message'>
                    <img src={profile} alt='profile picture'/>
                    <div className={`${className}-Content`} id='Message-Content'>
                        {className === 'sentMessage' ? <p className='Message-Username'>Me</p> : <p className='Message-Username'>{props.userName}</p>}
                        <p className='Message-Text'>{props.message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message;