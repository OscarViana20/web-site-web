import React, { useState, useEffect, useRef } from "react"

import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { Section } from '../../components/Section'
import { Experience } from '../../components/Experience'
import { scRevealConfig } from '../../utils/scRevealConfig'
import scReveal from '../../utils/scReveal'

import { ExperiencesContent } from './style'

import data from './experiences.yml'

export const Experiences = () => {

    const [node, setNode] = useState(null)
    const [showExperience, setShowExperience] = useState(false)

    const dataExp = useStaticQuery(graphql`
        query {
            experiences: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/experiences/" } }      
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                totalCount
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            company
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 481) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            jobTitle
                            dateFrom(formatString: "YYYY")
                            dateTo(formatString: "YYYY")
                            showYear
                        }
                        html
                    }
                }
            }
        }
    `)

    const experiences = dataExp.experiences.edges.filter(({ node }) => node)

    const handleShowExperience = (node) => {
        setNode(node)
        setShowExperience(true)
        document.body.style.overflow = 'hidden'

    }

    const handleChangeShow = ((show) => {
        setShowExperience(show)
        document.body.style.overflow = 'unset'
    })

    const revealExperiences = useRef([])

    useEffect(() => {
        revealExperiences.current.forEach((ref, i) => scReveal.reveal(ref, scRevealConfig(i * 100)));
    }, [])
            
    return (
      <Section title={data.title} id='experiences'>
        { experiences && experiences.map(({ node }, i) => {
            const { frontmatter } = node
            const { company, image, jobTitle, dateFrom, dateTo, showYear } = frontmatter
            const rangeYear = dateFrom === dateTo ? dateFrom : `${dateFrom} - ${dateTo}`
            
            return (
                <ExperiencesContent key={i} data-year = {dateTo} ref={el => (revealExperiences.current[i] = el)}>
                    <div className="years">
                        { showYear && (<div className="year">{dateTo}</div> )}
                    </div>
                    <div className="experiences">
                        <div className="experiences-content">                           
                            <h2 className="company">{ company }</h2>
                            <h3 className="position">{ jobTitle }</h3>   
                            <span className="year">{ rangeYear }</span>
                        </div>
                        <div className = "link" onClick={() => handleShowExperience(node)}>
                            <Img className="img" fluid={image.childImageSharp.fluid} alt={company}/>                            
                        </div>
                    </div>
                </ExperiencesContent>
            )
        })}        
        { showExperience && (
            <Experience node={node} onChangeShow={handleChangeShow}/>
        )}
      </Section>
  )
}