import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const contactsArray = Array.isArray(contacts) ? contacts : [];

    if (!filter) {
      setFilteredContacts(contactsArray);
    } else {
      const fContacts = contactsArray.filter(
        contact =>
          contact &&
          contact.name &&
          (contact.name?.toLowerCase()?.includes(filter.toLowerCase()) ||
            contact.number?.includes(filter))
      );
      setFilteredContacts(fContacts);
    }
  }, [contacts, filter]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.phone}>
          {contact.name} - {contact.phone}{' '}
          <button onClick={() => handleDelete(contact.phone)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
