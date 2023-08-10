import ExpandableSection from './ExpandableSection';
import WorkForm from './WorkForm';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { format } from 'date-fns';
import '../styles/index.css'

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
  const editButton = <button onClick={handleEdit} className="edit-button"><i className="fa-solid fa-pen"></i> Edit</button>;
  const submitButton = <button onClick={handleSubmit} className="submit-button">Save</button>;
  const addNewButton = <button onClick={handleAddNew} className="add-button"><i className="fa-solid fa-plus"></i> Add new</button>;

  const editContent = (
    <div className="work-section">
      <ExpandableSection title="Experience">
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
        <div className='section-buttons'>
          {editMode && addNewButton}
          {submitButton}
        </div>
        
        {!editMode && editButton}
        
      </ExpandableSection>
    </div>
  )

  const submittedContent = (
    <div className="work-section">
      {/* <ExpandableSection title="Experience"> */}
      <div className="preview-bar">
        <h2>Experience</h2>
        {editButton}
      </div>
      <div className='preview-work'>
        {jobsList.map(item => {
          return (
            <div className='preview-job' key={item.id}>
              <div className='preview-job-info'>
                {item.company && <p className='company-title'>{item.company}</p>}
                {item.role && <p className='job-title'>{item.role}</p>}
                {item.description && <p className='job-desc'>{item.description}</p>}
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