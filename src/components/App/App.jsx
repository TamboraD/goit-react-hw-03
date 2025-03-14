import { useState, useEffect } from 'react'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import ContactForm from '../ContactForm/ContactForm'

import css from '../App/App.module.css'

const savedContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

function App() {
  const [contacts, setContacts] = useState(() => 
JSON.parse(localStorage.getItem('contacts')) || savedContacts
  );

  

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const addContact = (newContact) => {
    setContacts((prevContact) => {
  return [...prevContact, newContact]
})
  }

  const deleteContact = (contactId) => {
    setContacts(prevContact => {
  return prevContact.filter(contact => contact.id !== contactId)
})
  }

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  )
}

export default App
