import { css } from 'styled-components'

import { colorSite, font } from '../../utils/siteConstants'
import { color } from '../../utils/constants'

export const buttonStyle = css`
  button, a {
    -webkit-tap-highlight-color: transparent;
    font-family: ${font.content};
  }

  a {
    
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 5px 15px;
    border: 0;
    border-radius: 0;
  }

  .btn {
    display: inline-block;
    padding: 1em 2em;
    transition-property: background;
    transition-duration: 0.2;
    transition-timing-function: ease-out;
    color: ${colorSite.light};
    border-radius: 24px;
    background-color: rgba(${color.rgb.primary}, 0.9);

    :hover {
      background-color: rgba(${color.rgb.primary}, 1);
    }
  }
`