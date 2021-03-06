import React, {useEffect} from "react"
import svg3DTagCloud from "3d-word-cloud"

import { Section } from '../../components/Section'
import { SkillsChart } from '../../components/SkillsChart'
import { ProgressBar } from '../../components/ProgressBar'

import { settings, priority, chart } from '../../utils/skills'

import { SkillsContent, ChartsContent } from './style'

import data from './skills.yml'

export const Skills = () => {
    
    useEffect(() => {      
      svg3DTagCloud(document.getElementById('tag-cloud'), settings);
    }, [])
            
    return (
      <Section title={data.title} id='skills'>
          <SkillsContent>
            <div className = 'skills__cloud__card'>
              <p data-aos='fade-right' >
                {data.skills}
              </p>
              <div id = "tag-cloud"/>
            </div>
            <div className = 'skills__card'>
                <div className="title__priority">{data.title_priority}</div>
                {
                  Object.entries(priority).map((item, i)  => (
                    <ProgressBar key={i} done={priority[i].percentage} leyend={priority[i].leyend}/>
                  ))
                }
            </div>
          </SkillsContent>
          <ChartsContent>
            <div className="title__chart">{data.title_chart}</div>
            <div className="content__chart">
              <SkillsChart data={chart} />
            </div>
          </ChartsContent>
      </Section>
  )
}