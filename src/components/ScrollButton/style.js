import styled from 'styled-components'

import { zIndex, colorSite } from '../../utils/siteConstants'

export const ScrollButtonContainer = styled.div`
    z-index: ${zIndex.scroll}; 
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 45px;
    display: none;
    position: fixed;
    right: 15px;
    background: ${colorSite.light} none repeat scroll 0 0;
    border-radius: 20px;
    border-style: 1px solid ${colorSite.dark};
    border-width: 0;
    bottom: 15px;
    box-shadow: 2px 2px 12px -5px ${colorSite.primary};
    cursor: pointer;

    &.show {
        display: block;
    }
    
`