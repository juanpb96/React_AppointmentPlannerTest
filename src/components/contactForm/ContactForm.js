import React from "react";

export const ContactForm = ({
  name,
  setName,
  isDuplicated,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        name="name" 
        type="text"
        placeholder="Name" 
        onChange={({target}) => setName(target.value)}/>
      <p className="error-message">{ isDuplicated && 'The name is duplicated'  }</p>
      <input 
        value={phone} 
        name="phone" 
        type="text" 
        placeholder="Phone number: 123456"
        pattern="[0-9]{6}"
        onChange={({target}) => setPhone(target.value)}/>
      <input 
        value={email} 
        name="email" 
        type="email" 
        placeholder="Email"
        onChange={({target}) => setEmail(target.value)}/>
      <button type="submit">Save</button>
    </form>
  );
};
