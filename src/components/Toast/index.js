import React, { useEffect } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { AiFillInfoCircle, AiFillCloseCircle, AiFillWarning } from 'react-icons/ai'

import { ToastType } from '../../utils/enum'
import { size } from '../../utils/constants'
import { ToastContent } from './style'

const Toast = ({type = ToastType.INFO, message, isShow, time, onChangeShow }) => {
  
  let Icon
  
  switch (type) {
    case ToastType.ERROR:
        Icon = AiFillCloseCircle
        break
    case ToastType.WARNING: 
        Icon = AiFillWarning
        break
    default: 
        Icon = AiFillInfoCircle
  }

  useEffect(() => {
    let timeId
    if (isShow && time) {
        timeId = setTimeout(() => {
          onChangeShow(false)
        }, time * 1000)
    }
    return () => {
      clearTimeout(timeId)
    }
  }, [isShow, time, onChangeShow])

  useScrollPosition(() => {
    onChangeShow(false)
  }, [])

  return (
      <ToastContent type={type} className="bottom-center">
        { isShow ? (
          <div className="notification toast bottom-center">
            <button onClick={() => { onChangeShow(false); } }>X</button>          
            <div className="notification-image">
              <Icon size={size.icon * 1.5} />
            </div>
            <div className="notification-message">    
              <p className="toast__message">{message}</p>
            </div>
          </div>      
          ): null
        }
      </ToastContent>
  )
}

export {
    Toast,
    ToastType
}