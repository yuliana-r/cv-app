/* eslint-disable react/prop-types */
export default function EducationForm(props) {
  const {id, school, title, startDate, endDate, handleChange, handleDelete} = props;

  return(
    <div className="degree-form">
      <form>
        <div className="field">
          <label htmlFor="institutionName">Institution name:</label>
          <input
            id="institutionName" 
            type="text"
            placeholder="e.g. Paws & Whiskers University"
            name="school"
            value={school}
            onChange={handleChange}
            className={id}
            required />
        </div>

        <div className="field">
          <label htmlFor="qualificationTitle">Qualification title:</label>
          <input 
            id="qualificationTitle"
            type="text"
            placeholder="e.g. Master of Catnaps"
            name="title"
            value={title}
            onChange={handleChange}
            className={id}
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
      <button className={id} onClick={handleDelete}><i className="fa-solid fa-trash"></i> Delete</button>
    </div>
  )
}