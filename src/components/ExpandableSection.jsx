/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/index.css'

export default function ExpandableSection(props) {
  const [expanded, setExpanded] = useState(true);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const getIcon = (title) => {
    if (title === 'Personal information') {
      return <i className="fa-solid fa-user"></i>;
    }

    if (title === 'Education') {
      return <i className="fa-solid fa-graduation-cap"></i>;
    }

    if (title === 'Experience') {
      return <i className="fa-solid fa-briefcase"></i>;
    }
  }
  

  return(
    <>
      <div className='section-bar'>
        <h2>{getIcon(props.title)}  {props.title}</h2>
        <button onClick={toggleExpand} className='expand-btn'>{expanded ? '-' : '+'}</button>
      </div>
      <div className={`section-content ${expanded ? 'expanded' : ''}`}>
        {props.children}
      </div>
    </>
  )
}