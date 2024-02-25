import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { addUser } from '../services/userListService';

export default function CreateUser() {
  const { setUsers } = useContext(UserContext);
  const history = useHistory();

  const submitForm = async e => {
    e.preventDefault();

    let inputValues = {
      id: '',
      name: e.target.name.value,
      username: e.target.username.value,
      email: e.target.email.value,
      city: e.target.city.value,
      street: e.target.street.value
    }

    const addedUser = await addUser(inputValues);
    setUsers(prevState => [...prevState, addedUser]);
    history.push('/');

    e.target.reset();
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} >
      <form onSubmit={submitForm}>
        <label>Name:
          <input type="text" name='name' />
        </label>
        <label>Username:
          <input type="text" name='username' />
        </label>
        <label>Email:
          <input type="text" name='email' />
        </label>
        <label>City:
          <input type="text" name='city' />
        </label>
        <label>Street:
          <input type="text" name='street' />
        </label>
        <button className='save'>Save</button>
      </form>
    </div >
  )
}