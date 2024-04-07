import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn); // Obținem starea de autentificare a utilizatorului

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert('Please log in to add a contact.');
      return;
    }

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and phone number.');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div
      style={{
        borderStyle: 'groove',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 30,
        color: '#010101',
        padding: 10,
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
