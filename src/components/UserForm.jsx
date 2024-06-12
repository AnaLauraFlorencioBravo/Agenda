import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ 
      id: Date.now(), 
      name: `${firstName}`, 
      phoneNumber: phoneNumber,
      address: address
    });
    setFirstName('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <div className="user-form" style={{ textAlign: 'center' }}>
      <h2>Agregar Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" value={firstName} onChange={(e) => setFirstName(e.target.value)} required /><br></br>
        <br />
        <input type="text" placeholder="Número de Teléfono" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required /><br></br>
        <br />
        <input type="text" placeholder="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default UserForm;
