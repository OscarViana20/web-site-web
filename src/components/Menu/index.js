import React from 'react'
import { useLocation } from '@reach/router'
import { navigate } from '@reach/router'

import { MenuContainer, ItemMenuContainer} from './style'

export const ItemMenu = ({ to, label, onClick }) => {
  const handleClick = () => {
    onClick(to)
  }

  const { hash } = useLocation()
  const activeClass = to === hash ? 'active' : ''

  return (
    <ItemMenuContainer className={activeClass}>
      <button onClick={handleClick}>{label}</button>
    </ItemMenuContainer>
  )
}

export const Menu = ({ isShow, onClickItem, hasBackground }) => {
  const internalLink = (to) => {
    navigate(to)
    onClickItem()
  }

  let classCss = isShow ? 'show' : ''
  classCss = `${classCss} ${hasBackground ? 'hasBackground' : ''}`

  return (
    <MenuContainer className={classCss}>
      <div className='mask' />
      <div className='menu__content'>
        <ul className='content__list'>
          <ItemMenu to='#home' label='Inicio' onClick={internalLink} />
          <ItemMenu to='#about' label='Sobre mi' onClick={internalLink} />
          <ItemMenu to='#experiences' label='Experiencia' onClick={internalLink} />
          <ItemMenu to='#skills' label='Habilidades' onClick={internalLink} />
          <ItemMenu to='#projects' label='Proyectos' onClick={internalLink} />          
          <ItemMenu to='#contact' label='Contacto' onClick={internalLink} />          
          <li className='resume__link'>
            <a href="/resume.pdf" target='noopener noreferrer'>
              C.V
            </a>
          </li>
        </ul>
      </div>
    </MenuContainer>
  )
}