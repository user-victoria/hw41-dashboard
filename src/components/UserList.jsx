import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';
import { updateUser } from '../services/userListService';

export default function User() {
  const { users, setUsers } = useContext(UserContext);
  const history = useHistory();
  const params = useParams();

  let filterUsersId = users.filter(item => item.id === +params.id);

  let userData = {
    name: filterUsersId[0].name,
    username: filterUsersId[0].username,
    email: filterUsersId[0].email,
    city: filterUsersId[0].address.city,
    street: filterUsersId[0].address.street
  }

  const updateForm = e => {
    e.preventDefault();

    updateUser(+params.id, e.target.className, e.target[0].value)
      .then(data => {
        setUsers(users.map(item => item.id === +params.id ? data : item))
        history.push('/')
      })

    e.target.reset();
  }

  return (
    <div className='wrapper-edit-form'>
      {Object.keys(userData).map(key => (
        <form key={key} className={key.toLowerCase()} onSubmit={updateForm}>
          <label>{key}:
            <input type="text" defaultValue={userData[key]} />
            <button className='save'>Save</button>
            <Link to={'/'}><button className='cancel'>Cancel</button></Link>
          </label>
        </form>
      ))}
    </div>
  )
}