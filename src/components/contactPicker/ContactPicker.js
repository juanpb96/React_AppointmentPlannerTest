import React from "react";

export const ContactPicker = ({contacts, handleChange}) => {
  return (
    <select onChange={handleChange}>
      <option defaultValue="Select">Select</option>
      { contacts.map( ({name}, i) => <option key={i} value={name}>{ name }</option>) }
    </select>
  );
};
