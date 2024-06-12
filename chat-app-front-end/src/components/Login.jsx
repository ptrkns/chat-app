import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css';
import UserContext from './UserContext';

function Login() {
  const {userName, setUserName} = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className='Login-Parent'>
            <div className='Login-Title-Container'>
                <h1>React Chat App</h1>
            </div>
            <div className='Login-Input-Container'>
                <input
                  required
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter a unique username'
                  autoComplete='username'
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
                <button type='submit'>Login</button>
            </div>
        </div>
    </form>
  );
}

export default Login;