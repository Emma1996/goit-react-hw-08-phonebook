import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { selectVisibleContacts } from 'redux/filter/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';


import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log('Filtered Contacts:', filteredContacts);

  useEffect(() => {
    console.log('Filtered Contacts:', filteredContacts);
  }, [filteredContacts]);

  return (
    <ul className={css.list} key={count}>
      {!count && !isLoading && !error ? (
        <p className={css.emptyMessage}>
          The Phonebook is empty. Add your first contact.
        </p>
      ) : (
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
};
