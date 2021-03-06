import styled from 'styled-components'

import { colorSite, padding, size } from '../../utils/siteConstants'

export const Header = styled.div`
  padding: ${padding.content} 5%;
  width: 100%;
  text-align: right;
  overflow: hidden;
  background-color: ${props => props.theme.backgroundColor};

  h2 {
    display: flex;
    align-items: center;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    font-size: ${size.text.h2};
    color: ${props => props.theme.color};    

    ::after {
      content: "";
      width: 50%;
      height: 1px;
      margin-left: 20px;
      background-color: ${props => props.theme.color};
    }
  }
`

Header.defaultProps = {
  theme: {
    color: colorSite.primary,
    backgroundColor: 'transparent'
  }
}