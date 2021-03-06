import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { FaChevronUp } from 'react-icons/fa'

import scrollTo from 'gatsby-plugin-smoothscroll';

import { size } from '../../utils/constants'
import { colorSite } from '../../utils/siteConstants'
import { ScrollButtonContainer } from './style'

export const ScrollButton = () => {

    const [showButton, setShowButton] = useState(false)

    useScrollPosition(({currPos}) => {
        if (currPos.y < -300) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, [showButton])

    let classCss = showButton ? 'show' : ''

    return (
        <ScrollButtonContainer onClick={() => scrollTo('#home')} className={classCss}>
            <FaChevronUp size={size.icon} color={colorSite.primaryShade} className="iconStyle"/>
        </ScrollButtonContainer>
    )
}