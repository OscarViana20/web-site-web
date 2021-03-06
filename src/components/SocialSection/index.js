import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";

import { size, color } from '../../utils/constants'
import { SocialSectionContainer } from './style'

export const SocialSection = () => {
    return (
        <SocialSectionContainer>
            <a href='https://www.linkedin.com/in/oscar-iv%C3%A1n-viana-sarango/' target='noopener noreferrer'>
                <FaLinkedin size={size.icon} color={`rgb(${color.rgb.light})`}/>
            </a>
            <a href='https://github.com/OscarViana20' target='noopener noreferrer'>
                <FaGithub size={size.icon} color={`rgb(${color.rgb.light})`} />
            </a>
            <a href='https://www.facebook.com/juancho.sarango/' target='noopener noreferrer'>
                <FaFacebook size={size.icon} color={`rgb(${color.rgb.light})`} />
            </a>
            <a href="#contact" style = {{cursor: 'pointer'}}>
                <AiOutlineMail size={size.icon} color={`rgb(${color.rgb.light})`} />
            </a>
        </SocialSectionContainer>
    )
}