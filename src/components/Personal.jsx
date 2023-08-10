import { useState } from 'react'
import ExpandableSection from './ExpandableSection';
import '../styles/index.css'

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
    const {name, value} = e.target;
    setPersonalInfo(prevPersonalInfo => {
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
  const editButton = <button onClick={handleEdit} className="edit-button"><i className="fa-solid fa-pen"></i> Edit</button>;
  const saveButton = <button className="submit-button">Save</button>;

  const editContent = (
    <div className='personal-section'>
      <ExpandableSection title="Personal information">
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label htmlFor="firstName">First name<span className='required'>*</span>:</label>
            <input
              id="firstName"
              type="text"
              placeholder="e.g. Fluffy"
              name="firstName"
              onChange={handleChange}
              value={personalInfo.firstName}
              maxLength={20}
              required />
          </div>
          
          <div className='field'>
            <label htmlFor="lastName">Last name<span className='required'>*</span>:</label>
            <input
              id="lastName"
              type="text"
              placeholder="e.g. Whiskerson"
              name="lastName"
              onChange={handleChange}
              value={personalInfo.lastName} 
              maxLength={20}
              required />
          </div>
          
          <div className='field'>
            <label htmlFor="email">Email address<span className='required'>*</span>:</label>
            <input
              id="email"
              type="email"
              placeholder="e.g. mr.whisker@paws.com"
              name="email"
              onChange={handleChange}
              value={personalInfo.email} 
              maxLength={30}
              required />
          </div>
          
          <div className='field'>
            <label htmlFor="phone">Phone number<span className='required'>*</span>:</label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 07575123456"
              name="phone"
              pattern="[0-9]*"
              onChange={handleChange}
              value={personalInfo.phone} 
              maxLength={20}
              required />
          </div>
          
          <div className='field'>
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              placeholder="e.g. Meow Town"
              name="location"
              onChange={handleChange}
              value={personalInfo.location}
              maxLength={25} />
          </div>
          
          <div className='field'>
            <label htmlFor="summary">Personal summary:</label>
            <textarea 
              id="summary"
              name="summary"
              placeholder="e.g. Highly independent and charismatic feline with a passion for exploration and an exceptional talent for napping."
              onChange={handleChange}
              value={personalInfo.summary}
              maxLength={250} 
              cols="36" 
              rows="6" />
          </div>

          {saveButton}
        </form>
      </ExpandableSection>
    </div>
  )

  const submittedContent = (
    <div className='personal-section'>
      
      <div className='preview-bar'>
        {editButton}
      </div>
      <div className='preview-personal'>
        <h1 className='preview-name'>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
        <div className='preview-contact-info'>
          <p>{email}</p>
          <p>|</p>
          <p>{phone}</p>
          {location.length > 0 && <p>|</p>}
          {location.length > 0 && <p>{location}</p>}
        </div>
        {summary.length > 0 && <p className='personal-summary'>{summary}</p>}
      </div>
    </div>
  )

  return(
    editMode ? editContent : submittedContent
  )
}