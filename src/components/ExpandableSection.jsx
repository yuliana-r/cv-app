/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/index.css'

export default function ExpandableSection(props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return(
    <>
      <div className='section-bar'>
        <h2>{props.title}</h2>
        <button onClick={toggleExpand} className='expand-btn'>{expanded ? '-' : '+'}</button>
      </div>
      {/* {expanded && <div className='section-content'>{props.children}</div>} */}
      <div className={`section-content ${expanded ? 'expanded' : ''}`}>
        {props.children}
      </div>
    </>
  )
}