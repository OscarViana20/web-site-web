import styled from 'styled-components'

import { zIndex, colorSite } from '../../utils/siteConstants'

export const SocialSectionContainer = styled.div`

    z-index: ${zIndex.social};
    position: fixed;
    top: calc(50vh - 100px);
    background: linear-gradient(90deg, #5b5c5d, #1d1d1de3);
    border-radius: 0px 10px 10px 0px;
    filter: drop-shadow(1px 3px 4px ${colorSite.light});

    a {
        display: block;
        text-align: center;
        padding: 5px;
        transition: all 0.3s ease;
        color: ${colorSite.light};
        font-size: 20px;

        :hover {
            color: ${colorSite.primaryShade};
            font-weight: normal;     
            border-radius: 10px 10px 10px 10px;
            filter: drop-shadow(1px 0px 0px ${colorSite.primaryShade});
        }
    }

`