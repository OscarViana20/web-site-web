  
import React from 'react';

import { ExperienceContainer } from './style'

const Experience = ({ node, onChangeShow }) => {

  const { frontmatter, html } = node
  const { company, jobTitle, dateFrom, dateTo } = frontmatter
  const rangeYear = dateFrom === dateTo ? dateFrom : `${dateFrom} - ${dateTo}`

  return (
    <ExperienceContainer data-aos='flip-right'>
      <div className='content'>
        <div className='header'>
          <span className='year'>{rangeYear}</span>
          <button onClick={() => { onChangeShow(false); } }>X</button>
        </div>                
        <div className='body'>
          <h2 className='title'>{company}</h2>
          <h4>{jobTitle}</h4>
          <div className='data'>
            <div className="description" dangerouslySetInnerHTML={{ __html: html }}/>
          </div>
        </div>
      </div>
    </ExperienceContainer>
  )
}

export {
    Experience
}