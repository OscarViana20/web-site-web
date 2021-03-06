import styled from 'styled-components'

import { colorSite } from '../../utils/siteConstants'

export const SkillsContent = styled.div`

    display: flex;
    width: 100%;

    p {
        color: ${colorSite.light};
        padding-left: 10px;
    }

    .skills__cloud__card {                 
        width: 100%;
        height: 90%;
        background-color: ${colorSite.dark};
        svg {
            margin-top: -50px;
        }
    }

    .skills__card {        
        width: 100%;
        height: 90%;
        background-color: ${colorSite.dark};

        .title__priority {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            color: ${colorSite.primary};
        }
    }

    @media (max-width: 768px) {
        display: block;
    }

    @media (max-width: 480px) {
        #tag-cloud {
            transform: translateX(-15%) !important;
        }

        svg {            
            margin-top: -40px !important;
            margin-bottom: 50px;
            width: 300px;
            height: 300px;
        }
    }

`

export const ChartsContent = styled.div`
    
    text-align: center;

    .content__chart {
        overflow-x: auto;
    }

    .title__chart {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        text-decoration: underline;
        color: ${colorSite.lightShade};
        margin-bottom: 30px;
    }
`