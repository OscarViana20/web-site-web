
import styled from 'styled-components'

import { colorSite } from '../../utils/siteConstants'

export const ExperienceContainer = styled.div`

    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
    z-index: 9;
    display: flex;
    justify-content: center;

    .content {        
        width: 95%;
        max-width: 920px;
        max-height: 95%;
        margin: auto;
        background-color: ${colorSite.light};
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        box-shadow: 0px 0px 5px 1px ${colorSite.primaryTint};        
    }

    .content 
    .header {
        color: #F50000;
        margin: 0;
        font-weight: bold;
        padding: 0em 0.6em 0em 1em;
        position: relative;
        border-bottom: 1px inset ${colorSite.primaryTint};

        button {
            width: 36px;
            font-weight: bold;
            color: ${colorSite.light};
            background-color: ${colorSite.primaryShade};
            position: absolute;
            cursor: pointer;
            outline: none;
            padding: 0.6em;
            margin: 0;
            border: 0;
            right: 0;
            top: 0;
        }
    }
        
    .content 
    .body {
        padding: 10px 40px 40px 40px;
        overflow: hidden;
        position: relative;
        background-color: ${colorSite.darkTint};
        h4 {
            text-transform: uppercase;
            color: ${colorSite.light};
            font-size: 17px;
            margin-bottom: 20px;
            margin-top: 20px;
        }   

        .title {
            display: block;
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            margin-top: 20px;
            margin-bottom: 10px;
            color: ${colorSite.light};
        }

        .year {
            font-size: 16px;
            font-weight: bold;
            color: ${colorSite.light};
        }     

        .data {
            overflow-y: auto;
            max-height: 50vh;
            margin: 10px -38px 0px 0px;
        }

        .data 
        .description {
            font-size: 14px;
            margin-bottom: 0;
            color: ${colorSite.light};
        }
    }
`