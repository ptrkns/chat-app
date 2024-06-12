import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { UserProvider } from './components/UserContext.jsx';
import Login from './components/Login.jsx';
import ChatComponent from './components/ChatComponent';

function App() {

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/home' element={<ChatComponent/>}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
};

export default App;