# Project Requirements:

## App Requirements:

- [x] Keep track of the contacts and appointments data, each being an array of objects
- [x] Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
- [x] Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments
- [x] Pass the array of contacts and the appropriate callback function as props to the ContactsPage component
- [x] Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component

## ContactsPage Requirements:

- [x] Receive two props:
    - [x] The current list of contacts
    - [x] A callback function for adding a new contact
- [x] Keep track of three local state values: the current name, phone, and email entered into the form
- [x] Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
- [x] Only add a new contact on form submission if it does not duplicate an existing contact’s name
- [x] A successful submission should clear the form
- [x] In the Add Contact section, render a ContactForm with the following passed via props:
    - [x] local state variables
    - [x] local state variable setter functions
    - [x] handleSubmit callback function
- [x] In the Contacts section, render a TileList with the contact array passed via props


## ContactForm Requirements:

- [x] Render a form with:
    - [x] The onSubmit attribute set
    - [x] 3 controlled <input> elements, one for each piece of contact data
    - [x] A submit button
- [x] Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference

## TileList Requirements:

- [x] Receive one prop:
    - [x] An array of objects to render as a list
- [x] Use the array passed via props to iteratively render Tile components, passing each object in the array as a prop to each rendered Tile component

## Tile Requirements:

- [x] Receive one prop:
    - [x] An object
- [x] Iterate over the values in the object, passed in via props, and render a <p> element for each value
- [x] Give a className of "tile-title" to the first <p> element
- [x] Give a className of "tile" to all other <p> elements

## AppointmentsPage Requirements:

- [x] Receive three props:
    - [x] The current list of appointments
    - [x] The current list of contacts
    - [x] A callback function for adding a new appointment
- [x] Keep track of four local state variables, the current title, contact, date, and time entered into the form
- [x] Add a new appointment on form submission
- [x] Clear the form on submission
- [x] In the Add Appointment section, render an AppointmentForm with the following passed via props:
    - [x] local state variables
    - [x] local state variable setter functions
    - [x] handleSubmit callback function
- [x] In the Appointments section, render a TileList with the appointment array passed via props

## AppointmentForm Requirements:

- [x] Render a form with:
    - [x] The onSubmit attribute set to the callback function passed in via props
    - [x] 3 controlled input components, to be used for the title, date and time appointment data
    - [x] A ContactPicker component with the contacts list passed in via props
    - [x] A submit button
- [x] Use getTodayString() to set the min attribute of the date input

## ContactPicker Requirements:

- [x] Receive 2 props:
    - [x] The array of contacts
    - [x] A callback function to handle when the onChange event is triggered
- [x] Render a select element with the onChange attribute set to the callback passed in via props
- [x] Have a default first option element that indicates no contact is selected
- [x] Iteratively add option elements using the contact names from the array passed in via props
