import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { TileList } from '../../components/tileList/TileList';
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({ contacts, addContact }) => {
  // Define state variables for contact info and duplicate check
  const [name, setName] = useState('');

  // Using hooks, check for contact name in the contacts array variable in props
  useEffect(() => {
    if(contacts.find((contact) => contact.name === name && name)) {
      setIsDuplicated(true);
    }
    return () =>{
      setIsDuplicated(false);
    }
  }, [contacts, name])

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicated, setIsDuplicated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data if the contact name is not a duplicate 
    if(isDuplicated) return;
    addContact({
      name: name,
      phone: phone,
      email: email
    });
    
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name = {name}
          setName = {setName}
          isDuplicated = {isDuplicated}
          phone = {phone}
          setPhone = {setPhone}
          email = {email}
          setEmail = {setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts}/>
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired
};
