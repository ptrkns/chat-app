import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../styles/App.css';

import { UserProvider } from './UserContext.jsx';
import Login from './Login.jsx';
import ChatComponent from './ChatComponent.jsx';

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