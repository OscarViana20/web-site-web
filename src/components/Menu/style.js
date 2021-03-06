import styled from 'styled-components'
import { bigButtonMenu } from '../../styles/mixins/background'

import { zIndex, colorSite } from '../../utils/siteConstants'
import { color } from '../../utils/constants'
import { devices } from '../../utils/devices'

export const MenuContainer = styled.nav`

  z-index: ${zIndex.menu};
  position: fixed;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  right: -100%;
  transition-duration: 0.5s, 0.6s;
  transition-property: right, opacity;
  transition-timing-function: ease-out, ease-in; 

  &.show {
    right: 0;
    opacity: 1;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    background: rgba(${color.rgb.darkTint}, 0.80);
    backdrop-filter: saturate(180%) blur(20px);
  }

  .menu__content {
    top: 25%;
    height: 75%;
    position: relative;
  }

  .content__list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    height: inherit;
    width: inherit;
    list-style: none;
  }

  .resume__link {  
    margin-right: 15px;
    width: max-content;
    ${bigButtonMenu}
  }

  @media ${devices.tablet} {
    right: 0;
    opacity: 1;
    height: 4em;

    .mask {
      background: none;
      backdrop-filter: initial;
    }

    .menu__content {
      top: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-right: 1em;
      padding-left: 0%;
    }

    .content__list {
      flex-direction: row;
      justify-content: space-between;
      height: initial;
    }

    &.hasBackground {
      .mask {
        background: rgba(${color.rgb.darkTint}, 0.80);
        backdrop-filter: saturate(180%) blur(20px);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
      }
    }
  }

  @media ${devices.laptop} {
    .menu__content {
      padding-left: 20%;
    }
  }

  @media ${devices.desktop} {
    .menu__content {
      padding-left: 40%;
    }
  }
`

export const ItemMenuContainer = styled.li`
  button {
    color: ${colorSite.light};
    text-transform: uppercase;
    font-size: 1.1em;
    border: 1px solid transparent;
    border-width: 1px;
    border-radius: 30px;

    :hover {
      color: ${colorSite.primary};
      font-weight: normal;
    }
  }

  &.active {
    button {
      border: 1px solid;
      border-width: 1px;
      border-radius: 30px;
    }
  }

  @media ${devices.tablet} {
    button {
      text-transform: initial;
      font-weight: lighter;
      font-size: 0.9em;
    }
  }
`