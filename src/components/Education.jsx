import ExpandableSection from './ExpandableSection';
import EducationForm from './EducationForm';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import '../App.css'

export default function Education() {
  const [educationList, setEducationList] = useState((
    {
      editMode: true,
      degreeList: [{
        school: '',
        title: '',
        date: '',
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
  const editButton = <button onClick={handleEdit} className="edit-button">Edit</button>;
  const submitButton = <button onClick={handleSubmit} className="submit-button">Save</button>;
  const addNewButton = <button onClick={handleAddNew} className="submit-button">Add new</button>;

  const editContent = (
    <div className="education-section">
      <ExpandableSection title="Education">
        {submitButton}
        {degreeList.map(item => {
          return <EducationForm 
            id={item.id}
            school={item.school}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            handleChange={handleChange}
            handleDelete={handleDelete}
            key={item.id}
          />
        })}
        {editMode && addNewButton}
        {!editMode && editButton}
      </ExpandableSection>
    </div>
  )

  const submittedContent = (
    <div className="education-section">
      <ExpandableSection title="Education">
        {degreeList.map(item => {
          return (
            <div key={item.id}>
              <p>{item.school}</p>
              <p>{item.title}</p>
              <p>{item.startDate} - {item.endDate ? item.endDate : 'Present'}</p>
            </div>
          )
        })}
        {!editMode && editButton}
      </ExpandableSection>
    </div>
  )

  return(
    editMode ? editContent : submittedContent
  )
}