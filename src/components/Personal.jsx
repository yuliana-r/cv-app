import { useState } from 'react'
import ExpandableSection from './ExpandableSection';

export default function Personal() {
  const [firstName, setFirstName] = useState('');

  function handleChange(e) {
    setFirstName(e.target.value);
  }

  return(
    <div className='personal-section'>
      <ExpandableSection title="Personal information">
        <form>
          <input
            type="text"
            placeholder="First name"
            onChange={handleChange} />
        </form>
        <p>Your name is: {firstName}</p>
      </ExpandableSection>
    </div>
  )
}