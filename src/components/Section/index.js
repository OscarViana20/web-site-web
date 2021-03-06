import React from 'react'

import { Header } from './style'

export const Section = ({id, title, children}) => (
  <section id={id}>
    <Header>
      <h2 data-aos="fade-right">{title}</h2>
    </Header>
    {children}
  </section>
)