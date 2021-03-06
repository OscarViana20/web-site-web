import { css } from 'styled-components'

import { colorSite, font, size } from '../../utils/siteConstants'

export const inputStyle = css`

  input, textarea {
    width: 100%;
    padding: 11px 26px;
    margin-bottom: 0.5em;
    border-radius: 25px;
    border: 1px solid ${colorSite.gray};
    font-family: ${font.content};
    font-size: ${size.text.content};
    outline: none;
    &:hover {
      border-color: ${colorSite.grayDark};
    }
    &:focus {
      outline: 0;
      box-shadow: 0 3px 0 0 rgba(251,29,29, 0.4);
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
    &.error {
      border: 1px solid ${colorSite.primaryShade};
    }
  }

  textarea {
    height: 9em;
  }
`