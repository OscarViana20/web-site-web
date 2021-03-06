import styled from 'styled-components'

import { colorSite } from '../../utils/siteConstants'

export const LoadingContainer = styled.div`
  z-index: 2;  
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colorSite.dark};
  
  .content {
    width: 50%;
    text-align: center;
    
    .bar {
      height: 1em;
      border-radius: 24px;
      transform-origin: 0;
      background-image: repeating-linear-gradient(90deg, ${colorSite.secondary}, ${colorSite.primary}, ${colorSite.secondary});
      background-size: 200%;
      animation: move 5s linear infinite;
    }
    
    .message { 
      
      color: ${colorSite.light};

      :after {
        content: '...';
      }
    }
  }

  @keyframes move {
    from {
      background-position: -100%;
    }
    to {
      background-position: 100%;
    }
  }
`