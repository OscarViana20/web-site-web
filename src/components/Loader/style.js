
import styled from 'styled-components';

import { colorSite } from '../../utils/siteConstants'

export const LoaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorSite.dark};
    z-index: 99;
    .logo-wrapper {
        width: max-content;
        max-width: 150px;
        transition: var(--transition);
        opacity: ${props => (props.isMounted ? 1 : 0)};
        svg {
            display: block;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            fill: none;
            user-select: none;
            #V {
                opacity: 0;
            }
        }
    }
`