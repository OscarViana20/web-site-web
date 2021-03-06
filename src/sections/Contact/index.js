import React, { useState, useEffect } from "react"
import { useForm } from 'react-hook-form'
import { gql } from '@apollo/client'

import { FaEnvelopeOpen } from 'react-icons/fa'

import { Loading } from '../../components/Loading'
import { Section } from '../../components/Section'
import { Toast } from '../../components/Toast'
import { ToastType } from '../../utils/enum'
import { size, color } from '../../utils/constants'

import { useResponseMutation } from '../../hooks/useResponseMutation'

import { ContactContent } from './style'

import data from './contact.yml'

export const Contact = () => {
    
    const { register, handleSubmit, errors, reset } = useForm()
    const [ messageToast, setMessageToast ] = useState(null)
    const [ toastType, setToastType ] = useState(null)

    const { loading, responseMessage, responseType, sendMutation } = useResponseMutation(gql`
        mutation ReceiveMessage($input: MailInput!) {
            response: receiveContactMessage(input: $input) {
                message
                success
                error
            }
        }
    `)

    const handleChangeShowToast = ((show) => {
        if (!show) setMessageToast(null)
    })

    const onSubmit = async (formData) => {        
        try {
            let result = await sendMutation({ variables: { input: formData }})
            if (result.data.response) { reset() }
        } catch (e) {
            console.error(e);
        }
    }
    
    useEffect(() => {
        const hasError = Object.entries(errors).length !== 0
        if (hasError) {
            if (Object.entries(errors)[0][1]['type'] === 'pattern') {
                setMessageToast('La dirección de correo es inválida')
            } else {                
                setMessageToast('Los campos marcados en rojo son obligatorios')
            }
            setToastType(ToastType.ERROR)
            return
        }

        if (!loading && responseMessage !== null) {
            setMessageToast(responseMessage)
            setToastType(responseType)
            return
        }
        setMessageToast(null)
        
    }, [loading, errors, responseMessage, responseType] )

    const showToast = messageToast !== null

    return (                
        <Section title={data.title} id='contact'>
            <Loading show={loading} message='Enviando mensaje...' />
            <ContactContent>
                <div className= "leyend">
                    <p data-aos='zoom-out' >
                        {data.content}
                    </p>
                    <p className= "leyend__email">
                        <li><FaEnvelopeOpen size={size.bigIcon} color={`rgb(${color.rgb.lightShade})`} /></li>
                        <span>También puedes escribirme a:</span>oscar.viana@hotmail.com
                    </p>
                </div>
                <div className="form">                    
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className='form__name__email'>
                            <input
                                className={errors.name ? 'error' : ''}
                                name='name'
                                type='text'
                                placeholder='Nombre'
                                ref={register({ required: true })}
                            />
                            <input
                                className={errors.from ? 'error' : ''}
                                name='from'
                                type='email'
                                placeholder='Correo'
                                ref={register({ 
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                    }
                                })}
                            />
                        </div>
                        <input
                            className={errors.subject ? 'error' : ''}
                            name='subject'
                            type='text'
                            placeholder='Asunto'
                            ref={register({ required: true })}
                        />
                        <textarea
                            className={errors.text ? 'error' : ''}
                            name='text'
                            placeholder='Mensaje'
                            ref={register({ required: true })}
                        />
                        <button type='submit' className='btn'>Enviar</button>                        
                    </form>
                    <Toast type={toastType} message={messageToast} isShow={showToast} time={6} onChangeShow={handleChangeShowToast}/>
                </div>
            </ContactContent>
        </Section>
    )
}