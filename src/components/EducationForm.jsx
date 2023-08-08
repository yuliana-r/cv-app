/* eslint-disable react/prop-types */
export default function EducationForm(props) {
  const {id, school, title, startDate, endDate, handleChange, handleDelete} = props;

  return(
    <div>
      <form>
        <label htmlFor="institutionName">Institution name <span className='required'>*</span>:</label>
        <input
          id="institutionName" 
          type="text"
          placeholder="e.g. Paws & Whiskers University"
          name="school"
          value={school}
          onChange={handleChange}
          className={id}
          required />

        <label htmlFor="qualificationTitle">Qualification title <span className='required'>*</span>:</label>
        <input 
          id="qualificationTitle"
          type="text"
          placeholder="e.g. Purr-fessor of Purr-formance Arts"
          name="title"
          value={title}
          onChange={handleChange}
          className={id}
          required />

        <label htmlFor="startDate">Start date<span className='required'>*</span>:</label>
        <input 
          id="startDate"
          type="date"
          name="startDate"
          value={startDate}
          onChange={handleChange}
          className={id}
          required />

        <label htmlFor="endDate">End date:</label>
        <input 
          id="endDate"
          type="date"
          name="endDate"
          value={endDate}
          onChange={handleChange}
          className={id} />
      </form>
      <button className={id} onClick={handleDelete}>Delete</button>
    </div>
  )
}