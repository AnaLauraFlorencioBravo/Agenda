import React, { useState } from 'react';
import './index.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (id, updatedUser) => {
    const updatedUsers = users.map((user) => (user.id === id ? updatedUser : user));
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="app">
      <h1>Administración de Usuarios</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
