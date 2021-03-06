import styled from 'styled-components'

import { colorSite } from '../../utils/siteConstants'

export const ProgressContainer = styled.div`

    .progress__leyend {
        font-size: 12px;
        font-weight: bold;        
        line-height: 2em;
        color: ${colorSite.light};
    }

    .progress {
        background-color: #d8d8d8;
        border-radius: 20px;
        margin: 0 0 5px 0;
        height: 12px;
    }

    .progress__done {
        background: linear-gradient(to left, #FF0000, #00FF00);
        box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
        border-radius: 20px;
        color: #fff;
        font-weight: bold;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 5px;
        height: 100%;
        width: 0;
        opacity: 0;
        transition: 1s ease 0.3s;
    }
`