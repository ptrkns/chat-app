import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Login.css';
import UserContext from './UserContext';

function Login() {
  const {userName, setUserName} = useContext(UserContext);

  return (
    <>
        <div className='Login-Parent'>
            <div className='Login-Title-Container'>
                <h1>React Chat App</h1>
            </div>
            <div className='Login-Input-Container'>
                <input
                  type='text'
                  placeholder='Enter a unique username'
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
                <Link to='/home'>Login</Link>
            </div>
        </div>
    </>
  );
}

export default Login;