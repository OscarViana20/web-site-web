import React, { useEffect }  from "react"
import styled from 'styled-components';

import { Layout } from '../layout'
import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Experiences } from '../sections/Experiences'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Contact } from '../sections/Contact'

import AOS from 'aos'
import 'aos/dist/aos.css'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

export default ({ location }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  },[])

  return (
    <Layout location={location}>
      <Home />      
      <StyledMainContainer className="fillHeight">
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  )
}
