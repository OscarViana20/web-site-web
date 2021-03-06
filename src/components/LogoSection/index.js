import React from 'react'

import { LogoContainer, Path, Logo } from './style'

export const LogoSection = () => (
  <a href="/" aria-label="home">
    <LogoContainer>
      <Path width='70%' height='80%' />
      <Logo />     
    </LogoContainer> 
  </a>
)