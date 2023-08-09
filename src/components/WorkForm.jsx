/* eslint-disable react/prop-types */
export default function WorkForm(props) {
  const {id, company, role, startDate, endDate, description, handleChange, handleDelete} = props;
  
  return(
    <div className="job-form">
      <form>
        <div className="field">
          <label htmlFor="companyName">Company name:</label>
          <input
            id="companynName" 
            type="text"
            placeholder="e.g."
            name="company"
            value={company}
            onChange={handleChange}
            className={id}
            required />
        </div>

        <div className="field">
          <label htmlFor="jobTitle">Job title:</label>
          <input 
            id="jobTitle"
            type="text"
            placeholder="e.g."
            name="role"
            value={role}
            onChange={handleChange}
            className={id}
            required />
        </div>

        <div className="field"> 
          <label htmlFor="jobDescription">Job description:</label>
          <textarea
            id="jobDescription"
            type="text"
            placeholder="e.g."
            name="description"
            value={description}
            onChange={handleChange}
            className={id}
            maxLength={250} 
            cols="36" 
            rows="6"
            required />
        </div>

        <div className="field"> 
          <label htmlFor="startDate">Start date:</label>
          <input 
            id="startDate"
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleChange}
            className={id}
            required />
        </div>

        <div className="field"> 
          <label htmlFor="endDate">End date:</label>
          <input 
            id="endDate"
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleChange}
            className={id} />
        </div>
      </form>
      <button className={id} onClick={handleDelete}>Delete</button>
    </div>
  )
}