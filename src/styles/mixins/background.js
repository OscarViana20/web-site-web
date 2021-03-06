import { css } from 'styled-components'

import { colorSite, font, size } from '../../utils/siteConstants'

export const saturationMask = css`
  backdrop-filter: saturate(100%) blur(4px);
  mask-repeat: no-repeat;
  mask-position: 100% 100%;
`

export const bigButton = css`
    color: ${colorSite.light};
    background-color: rgba(29,29,29,0.5);
    border-bottom: 2px solid ${colorSite.dark};
    border-radius: var(--border-radius);
    padding: 1% 1% 1% 1%;
    line-height: 0.9;
    font-weight: 500;
    font-size: ${size.text.md};
    font-family: ${font.mono};
    transition: var(--transition);
    box-shadow: 1px 1px 1px ${colorSite.light};
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(255,255,255, 0.5);
      color: ${colorSite.dark};
    }
    &:after {
      display: none !important;
    }
  `

export const bigButtonMenu = css`
    color: ${colorSite.light};
    background-color: rgba(9,29,29, 0.8);
    border: 1px solid ${colorSite.primaryTint};
    border-radius: var(--border-radius);
    padding: 0.6rem 0.6rem;
    font-size: ${size.text.md};
    font-family: ${font.mono};
    line-height: 0.9;
    transition: var(--transition);
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(251,29,29, 0.5);
      color: ${colorSite.light};
    }
    &:after {
      display: none !important;
    }
  `