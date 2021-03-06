import React, { useState } from 'react'

import { ProgressContainer } from './style'

export const ProgressBar = ({leyend, done}) => {

    const [style, setStyle] = useState({});

    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
    }, 2000);
    
    return (            
        <ProgressContainer>
            <div className="progress__leyend">{leyend}</div>
            <div className='progress'>                
                <div className="progress__done" style={style}>
                    <span>{done}%</span>
                </div>
            </div>
        </ProgressContainer>
    )
}