import React from 'react'

import { useState } from 'react'
import { useReducer,createContext,useContext } from 'react'
import { reducer } from './reducer'


const ListContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useListContext() {
  return useContext(ListContext);
}


const UserList = ({children}) => {

  const initialState = {
    users: [
      { id: 1, userName: "Gerardo", email: "gerar@gmail.com" },
      { id: 2, userName: "Magdalena", email: "Magda@gmail.com" },
      { id: 3, userName: "Lucia", email: "lu-cia@gmail.com" },
    ],
  }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [newUser, setNewUser] = useState({
        id: '',
        userName: '',
        email: ''
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_USER', payload: newUser})
    }



  return (
    <ListContext.Provider value={initialState}>
  
     {children}
     </ListContext.Provider>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="number" name="id" onChange={handleChange}/>
    //     <input type="text" name="userName" onChange={handleChange}/>
    //     <input type="text" name="email" onChange={handleChange}/>
    //     <button>Submit</button>
    //   </form>
      
    // </div>
  )
}

export default UserList