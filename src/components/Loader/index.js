import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import anime from 'animejs';

import { LoaderContent } from './style'
import { IconLoader } from '../IconLoader';

export const Loader = ({ finishLoading }) => {
  
    const animate = () => {
    
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })
        
        loader.add({
            targets: '#logo path',
            duration: 1500,
            easing: 'easeInOutQuart',
            strokeDashoffset: [anime.setDashoffset, 0],
            fillOpacity: {
                value: [0, 1],
                delay: (e, i) => i * 70,
                duration: 1800
            }
          })
          .add({
            targets: '#logo #V',
            duration: 1200,
            easing: 'easeInOutQuart',
            opacity: 1,
          })
          .add({
            targets: '#logo',
            delay: 500,
            duration: 2000,
            easing: 'easeInOutQuart',
            opacity: [1, 0],
            rotateY: '2turn',
          })
          .add({
            targets: '.loader',
            duration: 200,
            easing: 'easeInOutQuart',
            opacity: 0,
            zIndex: -1,
          })
    }

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, [])

    return (
        <LoaderContent className="loader" isMounted={isMounted}>
            <Helmet bodyAttributes={{ class: `hidden` }} />

            <div className="logo-wrapper">
                <IconLoader />
            </div>
        </LoaderContent>
    )
}