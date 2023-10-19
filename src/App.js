import React, { useState, useEffect } from 'react'
import Contactlist from './components/contactlist/contactlisrt'
function App() {

  const [contacts, setContacts] = useState([])

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(({ results }) => setContacts(results))
  }, [])

  return (
    <div className="App">
      {contacts.map((contact, index) => {
        return (
          <Contactlist
            key={index}
            avatarUrl={contact.picture.medium}
            name={`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
            email={contact.email}
            age={contact.dob.age}
          />
        )
      })}
    </div>
  );
}
export default App;
