import styled from 'styled-components'

import { colorSite, padding } from '../../utils/siteConstants'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  color: ${colorSite.lightShade};
  padding: ${padding.footer};
  background-color: ${colorSite.darkShade};
  span {
    color: ${colorSite.primaryTint};
  }
`