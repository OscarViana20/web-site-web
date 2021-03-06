import styled from 'styled-components'

import { devices } from '../../utils/devices'
import { colorSite } from '../../utils/siteConstants'

export const ContactContent = styled.div`

    display: flex;
    width: 100%;

    li {                
        list-style: none;
    }

    .leyend {
              
        width: 40%;

        p {
            line-height: 25px;
            font-family: "Open Sans", sans-serif;
            font-weight: 600;
            padding: 0 10%;
            text-align: justify;
            color: ${colorSite.light}
        }

        .leyend__email {
            font-weight: 500;
            padding-left: 50px;
            line-height: 21px;
            padding-top: 15px;
            padding-bottom: 15px;

            span {
                opacity: 0.5;
                display: block !important;
            }
        }
    }

    .form {

        width: 60%;
        form {
            position: relative;
            text-align: center;
        }

        button {
            background: linear-gradient(180deg, ${colorSite.primaryShade}, #820000d6);
            font-size: 14px;
            padding: 0.5em 1em;
            font-weight: bold;
            float: right;
        }
    }    

    @media ${devices.laptop} {
        .form__name__email {
            display: flex;
            justify-content: space-between;
            input {
                width: 48%;
            }
        }
    }

    @media (max-width: 768px) {
        display: block;

        .leyend, 
        .form {
            width: 100%;
        }
    }   
`