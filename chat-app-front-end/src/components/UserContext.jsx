import React, { useState, createContext } from 'react';

const UserContext = createContext({username:'', setusername: () => {}});

export function UserProvider({children}) {
    const [userName, setUserName] = useState('');

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;