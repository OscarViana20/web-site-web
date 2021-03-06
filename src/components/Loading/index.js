import React from 'react'

import { LoadingContainer } from './style'

export const Loading = ({show, message}) => {
  if (!show) return null

  return (
    <LoadingContainer>
      <div className='content'>
        <div className='bar' />
        <p className='message'>{message}</p>
      </div>
    </LoadingContainer>
  )
}