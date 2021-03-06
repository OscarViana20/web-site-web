import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import { Section } from '../../components/Section'

import { AboutContent } from './style'
import data from './about.yml'

export const About = () => {
  const { photo, figures } = useStaticQuery(
    graphql`
      query {
        photo: file(relativePath: { eq: "me4.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  
  return (
      <Section title={data.title} id='about'>
        <AboutContent>
          <div className='photo'>
            <Img
              fluid={photo.childImageSharp.fluid}
              style={{ backgroundSize: 'contain' }}
              data-aos='zoom-out-down'>
            </Img>
          </div>
          <p data-aos='fade-up' data-aos-duration="5000">
            {Object.entries(data.content).map((skill, k) => <li key={k}>{data.content[k]}</li>)}
          </p>
        </AboutContent>
      </Section>
  )
}
