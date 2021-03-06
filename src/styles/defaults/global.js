import { css } from 'styled-components'

import { colorSite , font, size } from '../../utils/siteConstants'

export const defaults = css`
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  html, body, p {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${font.content};
    font-size: ${size.text.content};
    color: ${colorSite.dark};
    background-color: ${colorSite.dark};
    line-height: 2em;
    @media (max-width: 480px) {
      font-size: ${size.text.lg};
    }
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      header {
        background-color: transparent;
      }
      #content > * {
        filter: blur(1px) brightness(1);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${colorSite.secondary};
    color: ${colorSite.light};
  }

  main {
    
    &::before,
    &::after {
      filter: blur(2px);
    }

    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
    
    &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        /*padding: 0 25px;*/
      }
    }

    .particles {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(180deg, #000000a6 10%, #1d1d1d3b 50%);
    }
  }

  #root section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    @media (max-width: 768px) {
      /*padding: 80px 0;*/
    }
    @media (max-width: 480px) {
      /*padding: 60px 0;*/
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${colorSite.light};
    line-height: 1.1;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${colorSite.light};
    }
  }

  ::-webkit-scrollbar-track
  {
	  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	  background-color: ${colorSite.darkTint};
  }

  ::-webkit-scrollbar
  {
	  background-color: ${colorSite.darkTint};
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb
  {
	  background-color: ${colorSite.primaryTint};
	  border: 1px solid #333232cc;
    border-radius: 20px;
    box-shadow: inset 0 0 7px #000000;
  }
`