import styled from 'styled-components'

import { devices } from '../../utils/devices'
import { margin, colorSite } from '../../utils/siteConstants'

export const AboutContent = styled.div`
  display: flex;
  align-items: center;

  p {
    /*width: 60%;*/
    text-align: justify;
    color: ${colorSite.light};
  }

  li {
    padding-top: 5px;
    list-style: none;
    
    &::before {
      content: '▹';
      color: ${colorSite.lightShade};
      font-weight: bold;
    }
  }

  .photo {
    width: 100%;    
    background-color: #ffb400;
    right: -50px;
  }

  @media ${devices.phablet} {    

    p {
      margin-top: ${margin.block};
      width: 100%;
      padding-left: 8%;
      text-align: justify;
    }

    .photo {
      width: 50%;
    }
  }

  @media ${devices.laptop} {

    padding-left: 7%;
    padding-right: 7%;

    p {
      width: 60%;
      padding-left: 8%;
      text-align: justify;
    }

    .photo {
      width: 40%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

`