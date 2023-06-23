import React from 'react'
import UserList from './UserList';
import { useListContext} from './UserList'


const UserTable = () => {
  const initialState = useListContext();

  return (

    <div>
  
  
      {initialState.users.map((init) => (
        <div key={init.id}>
          {/* <span>{init.userName}</span>
          <span>{init.email}</span> */}
        
        
   
          <tr>
            <td>{init.id+' - '}<br/></td>
            <td>{init.userName+' - '}<br/></td>
            <td>{init.email+' - '}<br/></td>
          </tr>

     

        </div>
      ))}
      
    </div>

  )
  


}

export default UserTable


