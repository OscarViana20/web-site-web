import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'

import { ToastType } from '../utils/enum'

function useResponseMutation (gql) {
  const [responseMessage, setResponseMessage] = useState(null)
  const [responseType, setResponseType] = useState(ToastType.ERROR)

  const [sendMutation, { data, loading, error }] = useMutation(gql)

  useEffect(() => {
    if (error) {
      setResponseMessage('El servicio no se encuentra disponible, por favor intente más tarde.')
      setResponseType(ToastType.ERROR)
      return
    }

    if (!loading && data) {
      setResponseMessage(data.response.message)
      data.response.success ? setResponseType(ToastType.INFO) : setResponseType(ToastType.ERROR)
    }
  }, [data, loading, error])

  return { loading, responseMessage, responseType, sendMutation }
}

export {
  useResponseMutation
}