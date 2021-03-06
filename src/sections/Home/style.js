import styled from 'styled-components';

import { colorSite, font } from '../../utils/siteConstants'
import { bigButton } from '../../styles/mixins/background'

export const HomeSection = styled.section`
  
  position: inherit;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  z-index: 1;

  h1 {
    margin: 0 0 30px 4px;
    font-family: ${font.mono};
    font-size: clamp(20px,8vw,25px);
    font-weight: 400;
    color: ${colorSite.tertiary};
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    margin: 0;
    color: ${colorSite.light};
    font-size: clamp(30px, 8vw, 70px);
    span {
      color: ${colorSite.primary};
    }
  }

  h3 {
    margin-top: 10px;
    line-height: 0.9;
    color: ${colorSite.dark};
    font-size: clamp(35px, 8vw, 55px);
    text-shadow: 1px 1px 1px ${colorSite.primaryTint};
  }
  
  p {
    margin: 20px 0 0;
    max-width: 500px;
    font-weight: bold;
    color: ${colorSite.light};
    text-shadow: 1px 1px 1px ${colorSite.secondaryTint};
  }
  
  .email-link {
    margin-top: 20px;
    ${bigButton}
  }
`