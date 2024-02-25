import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './pages/User';
import Users from './pages/Users';
import CreateUser from './pages/CreateUser';
import UserContext from './context/UserContext';
import { getUsers } from './services/userListService';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let someUsers = await getUsers();
      setUsers(someUsers);
    })();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ users, setUsers }}>
        <Router>
          <Switch>

            <Route path='/createuser' exact>
              <CreateUser />
            </Route>

            <Route path='/:id' exact>
              <User />
            </Route>

            <Route path='/'>
              <Users />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;