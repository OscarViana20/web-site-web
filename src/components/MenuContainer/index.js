import React, { useState } from 'react'
import Media from 'react-media'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { MenuButton } from '../MenuButton'
import { Menu } from '../Menu'
import { devices } from '../../utils/devices'

export const MenuContainer = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [hasBackground, setHasBackground] = useState(false)

  const handlerClickMenuButton = () => {
    setShowMenu(!showMenu)
  }

  const handlerMediaRender = () => (
    <MenuButton onClick={handlerClickMenuButton} isClicked={showMenu} />
  )

  useScrollPosition(({currPos}) => {
    if (currPos.y < -10) {
      setHasBackground(true)
    } else {
      setHasBackground(false)
    }
  }, [hasBackground])

  return (
    <>
      <Media query={devices.tablet_first} render={handlerMediaRender}/>
      <Menu isShow={showMenu} onClickItem={handlerClickMenuButton} hasBackground={hasBackground}/>
    </>
  )
}