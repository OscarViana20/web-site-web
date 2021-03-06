import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import { GlobalStyle } from '../styles/main'
import { Loader } from '../components/Loader'
import { LogoSection } from '../components/LogoSection'
import { MenuContainer } from '../components/MenuContainer'
import { SocialSection } from '../components/SocialSection'
import { ScrollButton } from '../components/ScrollButton'
import { Footer } from '../components/Footer'


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Layout = ({ children, location }) => {

  const isHome = location.pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading, location]);

  return (
    <div id="root">
      <GlobalStyle /> 
      {
        isLoading && isHome ? 
        ( <Loader finishLoading={() => setIsLoading(false)} /> ) : 
        ( <StyledContent>
            <LogoSection />
            <MenuContainer />
            <SocialSection />
            <div id = "content">
              {children}
            </div>
            <ScrollButton />
            <Footer />
          </StyledContent>
        )
      }
    </div>
  )
}