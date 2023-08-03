import { useState } from 'react'
import ExpandableSection from './ExpandableSection';

export default function Personal() {
  const [personalInfo, setPersonalInfo] = useState((
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
      editMode: true
    }
  ));

  function handleChange(e) {
    setPersonalInfo(prevPersonalInfo => {
      const {name, value} = e.target;
      return {
        ...prevPersonalInfo,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPersonalInfo(prevPersonalInfo => {
      return {
        ...prevPersonalInfo,
        editMode: false
      }
    })
  }

  function handleEdit(e) {
    e.preventDefault();
    setPersonalInfo(prevPersonalInfo => {
      return {
        ...prevPersonalInfo,
        editMode: true
      }
    })
  }

  const {firstName, lastName, email, phone, location, summary, editMode} = personalInfo;
  const editButton = <button onClick={handleEdit} className="edit-button">Edit</button>;
  const saveButton = <button className="submit-button">Save</button>;

  const editContent = (
    <div className='personal-section'>
      <ExpandableSection title="Personal information">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name <span className='required'>*</span>:</label>
          <input
            id="firstName"
            type="text"
            placeholder="e.g. Fluffy"
            name="firstName"
            onChange={handleChange}
            value={personalInfo.firstName}
            required />
          <label htmlFor="firstName">Last name <span className='required'>*</span>:</label>
          <input
            id="lastName"
            type="text"
            placeholder="e.g. Whiskerson"
            name="lastName"
            onChange={handleChange}
            value={personalInfo.lastName} 
            required />
          <label htmlFor="email">Email address <span className='required'>*</span>:</label>
          <input
            id="email"
            type="email"
            placeholder="e.g. mr.whisker@paws.com"
            name="email"
            onChange={handleChange}
            value={personalInfo.email} 
            required />
          <label htmlFor="phone">Phone number <span className='required'>*</span>:</label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 07575 123456"
            name="phone"
            pattern="[0-9]*"
            onChange={handleChange}
            value={personalInfo.phone} 
            required />
          <label htmlFor="location">Location:</label>
          <input
            id="location"
            type="text"
            placeholder="e.g. Meow Town"
            name="location"
            onChange={handleChange}
            value={personalInfo.location} />

          <label htmlFor="summary">Personal summary:</label>
          <textarea 
            id="summary"
            name="summary"
            placeholder="Highly independent and charismatic feline with a passion for exploration and an exceptional talent for napping."
            onChange={handleChange}
            value={personalInfo.summary} 
            cols="30" 
            rows="5" />

          {saveButton}

        </form>
      </ExpandableSection>
    </div>
  )

  const submittedContent = (
    <div className='personal-section'>
      <ExpandableSection title="Personal information">
        <h1>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
        <p>{email}</p>
        <p>{phone}</p>
        {location.length > 0 && <p>{location}</p>}
        {summary.length > 0 && <p>{summary}</p>}
        {editButton}
      </ExpandableSection>
    </div>
  )

  return(
    <div>
      { editMode ? editContent : submittedContent }
    </div>
    
  )
}