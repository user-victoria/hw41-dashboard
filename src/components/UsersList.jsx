import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../services/userListService';
import UserContext from '../context/UserContext';

export default function Users() {
  const { users, setUsers } = useContext(UserContext);

  const removeUser = id => {
    deleteUser(id).then(() => {
      setUsers(prevState => prevState.filter(item => item.id !== id));
    });
  }

  return (
    <>
      <ul>
        {users.map(item => (
          <li key={item.id}>
            {item.name}
            <Link to={`/${item.id}`}><button className='edit'>Edit</button></Link>
            <button className='delete' onClick={() => removeUser(item.id)}>Delete</button>
          </li>)
        )}
      </ul>
      <Link to={'/createuser'}><button className='create-user'>Create User</button></Link>
    </>
  )
}