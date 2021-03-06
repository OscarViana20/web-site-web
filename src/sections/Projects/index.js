import React, { useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

import { size, color } from '../../utils/constants'
import { Section } from '../../components/Section'
import { scRevealConfig } from '../../utils/scRevealConfig'
import scReveal from '../../utils/scReveal'

import { ProjectContent } from './style'

import data from './projects.yml'

export const Projects = () => {

    const dataPro = useStaticQuery(graphql`
      query {
        projects: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/projects/" } }      
          sort: { fields: [frontmatter___date], order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 700, traceSVG: { color: "#64ffda" }) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                tech
                github
                externalUrl
              }
              html
            }
          }
        }
      }
    `)

    const projects = dataPro.projects.edges.filter(({ node }) => node)

    const revealProjects = useRef([])

    useEffect(() => {
        revealProjects.current.forEach((ref, i) => scReveal.reveal(ref, scRevealConfig(i * 100)));
    }, [])

    return (
        <Section title={data.title} id='projects'>
                
          { projects && projects.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { title, image, tech, github, externalUrl } = frontmatter
            
            return (
              <ProjectContent key={i} ref={el => (revealProjects.current[i] = el)}>
              
                <div className="project-content">
                  <h3 className="project-title"><span>{title}</span></h3>
                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }}/>

                  {tech.length && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (<li key={i}>{tech}</li>))}
                    </ul>
                  )}

                  <div className="project-links">
                    
                    {github && (
                      <a href={github} aria-label="GitHub Link" target='noopener noreferrer'>
                        <FaGithub size={size.icon} color={`rgb(${color.rgb.light})`} />
                      </a>
                    )}
                    {externalUrl && (
                      <a href={externalUrl} aria-label="External Link" target='noopener noreferrer'>
                        <FaExternalLinkAlt size={size.icon} color={`rgb(${color.rgb.light})`} />
                      </a>
                    )}
                    
                  </div>
                </div>

                <div className="project-image">
                  <a href={externalUrl ? externalUrl : github ? github : '#'} target='noopener noreferrer'>
                    {tech.length && (
                      <div className="tags">
                        <div>
                            <ul>
                              {tech.map((tech, i) => (<li key={i} style={{ transitionDelay: `${i * 0.04 + 0.25}s` }}>{tech}</li>))}
                            </ul>
                        </div>
                      </div>
                    )}
                    <Img fluid={image.childImageSharp.fluid} alt={title} className="img" />
                  </a>
                </div>

              </ProjectContent>
            )
          })}
        </Section>
    )
}