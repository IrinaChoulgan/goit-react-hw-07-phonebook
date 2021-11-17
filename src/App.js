import { useState, useEffect } from 'react';
import ContactList from './components/Contacts/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import styles from './components/ContactForm/ContactForm.module.css';
import contactsArray from './components/contacts.json';

export default function App() {
  // const useLS = contactsArray => {
  //   const [contacts, setContacts] = useState(
  //     () =>
  //       JSON.parse(window.localStorage.getItem('contacts')) ?? contactsArray,
  //   );
  //   useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);
  //   return [contacts, setContacts];
  // };

  // const [contacts, setContacts] = useLS(contactsArray);
  // const [filter, setFilter] = useState('');

  // const addNewContact = obj => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === obj.name.toLowerCase(),
  //     )
  //   ) {
  //     alert(`${obj.name} is already in contacts`);
  //   } else setContacts(prev => [...prev, obj]);
  // };
  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };
  // const onChangeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };
  // const visibleContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
}
