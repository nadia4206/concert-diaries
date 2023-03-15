import React from 'react';

const UserContext = React.createContext();

function UserProvider({children}) {
    const state = {
        isLoggedIn: false,
        userId: null,
        page: null,
        username: null,
        email: null,
        password: null
    }

    return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };