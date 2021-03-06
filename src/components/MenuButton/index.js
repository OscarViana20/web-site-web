import React from 'react'

import { ButtonContainer } from './style'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { size, color } from '../../utils/constants'

export const MenuButton = ({ onClick, isClicked }) => {
  const Icon = isClicked ? AiOutlineClose : HiMenuAlt3
  return (
    <ButtonContainer onClick={onClick}>
      <Icon size={size.icon} color={`rgb(${color.rgb.light})`} />
    </ButtonContainer>
  )
}