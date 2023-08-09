import ExpandableSection from './ExpandableSection';
import WorkForm from './WorkForm';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import '../App.css'

export default function Work() {
  const [workList, setWorkList] = useState((
    {
      editMode: true,
      jobsList: [{
        company: '',
        role: '',
        description: '',
        startDate: '',
        endDate: '',
        id: uuid()
      }]
    }
  ));

  function handleSubmit(e) {
    e.preventDefault();
    setWorkList(prevWorkList => {
      return {
        ...prevWorkList,
        editMode: false
      }
    })
  }

  function handleEdit(e) {
    e.preventDefault();
    setWorkList(prevWorkList => {
      return {
        ...prevWorkList,
        editMode: true
      }
    })
  }

  function handleAddNew() {
    setWorkList({
      editMode: true,
      jobsList: jobsList.concat({
        company: '',
        role: '',
        description: '',
        startDate: '',
        endDate: '',
        id: uuid()
      }),
    })
  }

  function handleChange(e) {
    const {name, className, value} = e.target;
    setWorkList({
      editMode: true,
      jobsList: jobsList.map(job => {
        return job.id === className ? {
          ...job,
          [name]: value
        } : job;
      })
    })
  }

  function handleDelete(e) {
    const { className } = e.target;
    setWorkList({
      editMode: true,
      jobsList: jobsList.filter(job => {
        return job.id !== className;
      })
    })

  }

  const { jobsList, editMode } = workList;
  const editButton = <button onClick={handleEdit} className="edit-button">Edit</button>;
  const submitButton = <button onClick={handleSubmit} className="submit-button">Save</button>;
  const addNewButton = <button onClick={handleAddNew} className="submit-button">Add new</button>;

  const editContent = (
    <div className="work-section">
      <ExpandableSection title="Experience">
        {submitButton}
        {jobsList.map(item => {
          return <WorkForm 
            id={item.id}
            company={item.company}
            role={item.role}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            key={item.id}
          />
        })
        }
        {editMode && addNewButton}
        {!editMode && editButton}
      </ExpandableSection>
    </div>
  )

  const submittedContent = (
    <div className="work-section">
      <ExpandableSection title="Experience">
        {jobsList.map(item => {
          return (
            <div key={item.id}>
              {item.company && <p>{item.company}</p>}
              {item.role && <p>{item.role}</p>}
              {item.description && <p>{item.description}</p>}
              {item.startDate && <p>{item.startDate} - {item.endDate ? item.endDate : 'Present'}</p>}
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