import {createContext, useContext, useState} from 'react';

export const UserContext = createContext({

});

export const ContextProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null);
    const value ={currentUser,setCurrentUser};
    return(
     <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    )
    
}