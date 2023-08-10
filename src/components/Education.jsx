import ExpandableSection from './ExpandableSection';
import EducationForm from './EducationForm';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { format } from 'date-fns';
import '../styles/index.css'

export default function Education() {
  const [educationList, setEducationList] = useState((
    {
      editMode: true,
      degreeList: [{
        school: '',
        title: '',
        startDate: '',
        endDate: '',
        id: uuid()
      }]
    }
  ));

  function handleSubmit(e) {
    e.preventDefault();
    setEducationList(prevEducationList => {
      return {
        ...prevEducationList,
        editMode: false
      }
    })
  }

  function handleEdit(e) {
    e.preventDefault();
    setEducationList(prevEducationList => {
      return {
        ...prevEducationList,
        editMode: true
      }
    })
  }

  function handleAddNew() {
    setEducationList({
      editMode: true,
      degreeList: degreeList.concat({
        school: '',
        title: '',
        date: '',
        id: uuid()
      }),
    })
  }

  function handleChange(e) {
    const {name, className, value} = e.target;
    setEducationList({
      editMode: true,
      degreeList: degreeList.map(degree => {
        return degree.id === className ? {
          ...degree,
          [name]: value
        } : degree;
      })
    })
  }

  function handleDelete(e) {
    const { className } = e.target;
    setEducationList({
      editMode: true,
      degreeList: degreeList.filter(degree => {
        return degree.id !== className;
      })
    })

  }

  const { degreeList, editMode } = educationList;
  const editButton = <button onClick={handleEdit} className="edit-button"><i className="fa-solid fa-pen"></i> Edit</button>;
  const submitButton = <button onClick={handleSubmit} className="submit-button">Save</button>;
  const addNewButton = <button onClick={handleAddNew} className="add-button"><i className="fa-solid fa-plus"></i> Add new</button>;

  const editContent = (
    <div className="education-section">
      <ExpandableSection title="Education">
        {degreeList.map(item => {
          return <EducationForm 
            id={item.id}
            school={item.school}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            key={item.id}
          />
        })}
        <div className='section-buttons'>
          {editMode && addNewButton}
          {submitButton}
        </div>
        
        {!editMode && editButton}
        
      </ExpandableSection>
    </div>
  )

  const submittedContent = (
    <div className="education-section">
      {/* <ExpandableSection title="Education"> */}
      <div className='preview-bar'>
        <h2>Education</h2>
        {editButton}
      </div>
      <div className='preview-education'>
        {degreeList.map(item => {
          return (
            <div className='preview-degree' key={item.id}>
              <div className='preview-school-title'>
                {item.school && <p className='uni-title'>{item.school}</p>}
                {item.title && <p className='degree-title'>{item.title}</p>}
              </div>
              {item.startDate && <p>{format(new Date(item.startDate),'MMM yyyy')} - {item.endDate ? format(new Date(item.endDate),'MMM yyyy') : 'Present'}</p>}
            </div>
          )
        })}
      </div>
      {/* </ExpandableSection> */}
    </div>
  )

  return(
    editMode ? editContent : submittedContent
  )
}