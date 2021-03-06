import styled from 'styled-components'

import { zIndex } from '../../utils/siteConstants'
import { color } from '../../utils/constants'
import { devices } from '../../utils/devices'
import { saturationMask } from '../../styles/mixins/background'
import pathLogo from '../../assets/img/pathLogo.svg'
import logo from '../../assets/img/logoOV.svg'

export const LogoContainer = styled.div`
  z-index: ${zIndex.logo};
  position: fixed;
  top: 0;
  left: 0;
  width: 6em;
  height: 6em;

  @media ${devices.tablet} {
    height: 3em;
  }
`

export const Path = styled.div.attrs(props => ({
  width: props.width || '100%',
  height: props.height || '100%'
}))`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  mask-image: url(${pathLogo});
  mask-size: cover;
  background-color: rgba(${color.rgb.dark}, 0.75);
  ${saturationMask}

  @media ${devices.tablet} {
    display: none;
  }
`

export const Logo = styled.div`
  position: absolute;
  top: 0.25em;
  /*left: 10%;*/
  width: 3.5em;
  height: 3.5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`