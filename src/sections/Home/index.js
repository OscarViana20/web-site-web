import React, {useEffect, useState} from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Particles from 'react-particles-js'
import ReactHtmlParser from 'react-html-parser'

import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { HomeSection } from './style' 
import { color } from '../../utils/constants'
import { particlesConfig } from '../../utils/particles'

import data from './home.yml'

export const Home = () => {

  const {
    hero
  } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "hero.png"}){
          childImageSharp {
            fluid(maxWidth: 1920){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const [isMounted, setIsMounted] = useState(false)

  const background = [
    `linear-gradient(rgba(${color.rgb.darkTint},0.1), rgba(${color.rgb.darkTint},0.1))`,
    hero.childImageSharp.fluid
  ]

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return ( 
    <BackgroundImage
      Tag='main'
      fluid={background} 
      className="fillHeight">
      <HomeSection id='home'>
        <TransitionGroup component={null}>
          {isMounted && Object.entries(data.content).map((item, i) => (
              <CSSTransition key={i} classNames="fadedown" timeout={2000}>
                <div style={{ transitionDelay: `${i*2 + 2}00ms` }}>{ReactHtmlParser(data.content[i])}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </HomeSection>
      <Particles params={particlesConfig} className="particles"/>
    </BackgroundImage>
  )
}