import React, { useState } from 'react';

function UserList({ users, editUser, deleteUser }) {
  const [editingUser, setEditingUser] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedPhoneNumber, setEditedPhoneNumber] = useState('');
  const [editedAddress, setEditedAddress] = useState('');

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedName(user.name);
    setEditedPhoneNumber(user.phoneNumber);
    setEditedAddress(user.address);
  };

  const handleSave = () => {
    editUser(editingUser.id, { ...editingUser, name: editedName, phoneNumber: editedPhoneNumber, address: editedAddress });
    setEditingUser(null);
    setEditedName('');
    setEditedPhoneNumber('');
    setEditedAddress('');
  };

  return (
    <div className="user-list">
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user === editingUser ? (
              <div>
                <h3>Editar Usuario:</h3>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} placeholder="Nombre" style={{ marginRight: '10px' }} />
                  <input type="text" value={editedPhoneNumber} onChange={(e) => setEditedPhoneNumber(e.target.value)} placeholder="Número de Teléfono" style={{ marginRight: '10px' }} />
                  <input type="text" value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} placeholder="Dirección" />
                </div>
                <button style={{ marginTop: '10px' }} onClick={handleSave}>Guardar</button>
              </div>
            ) : (
              <div>
                <span style={{ marginRight: '10px' }}>{user.name}</span>
                <span style={{ marginRight: '10px' }}>{user.phoneNumber}</span>
                <span>{user.address}</span>
                <div style={{ display: 'flex', marginTop: '10px' }}>
                  <button style={{ marginRight: '5px' }} onClick={() => handleEdit(user)}>Editar</button>
                  <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
