import { useState,useEffect } from 'react';

import './style.css';

import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts]= useState([
        {
        fullname:"Mehmet",
        phone_number:"151818"
        },{
            fullname:"Dilşad",
            phone_number:"151656"
        },{
            fullname:"Fatih",
            phone_number:"3548415"
        }
]);

    useEffect(()=>{
        console.log(contacts);
    }, [contacts]);

  return (
    <div id="container">
        <h1>Contacts</h1>
      <List contacts ={contacts} />
      <Form  addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
