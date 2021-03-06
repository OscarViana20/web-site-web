import styled from 'styled-components'

import { color } from '../../utils/constants'
import { colorSite, font, size } from '../../utils/siteConstants'

export const ProjectContent = styled.div`

  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-title {
    color: ${colorSite.lightShade};
    font-size: clamp(24px, 5vw, 28px);
    transform: rotate(-3deg);
    span {
      background-color: ${colorSite.primary};
    }
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      color: ${colorSite.light};
    }
  }

  .project-description {
    position: relative;
    z-index: 2;
    padding: 15px;
    border-radius: 4px;
    background-color: ${colorSite.darkTint};
    color: ${colorSite.light};
    font-size: ${size.text.xs};
    &:hover {
      box-shadow: 6px 7px 7px -6px ${colorSite.primaryTint};
    }
    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
  }

  .project-tech-list {
    display: none;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 15px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: ${colorSite.light};
      font-family: ${font.content};
      font-size: ${size.text.xs};
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      display: flex;
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: ${colorSite.lightShade};
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${colorSite.lightShade};
    a {      
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
        margin-top: -4px;
      }
    }
  }

  .project-image {    
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      border-radius: 4px;
      vertical-align: middle;
      .tags {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        div {
          height: 100%;
          margin: 0 auto;
          width: 80%;
          position: relative;
          display: flex;
          align-items: center;
        }
        ul {
          text-align: center;
        }
        li {      
          display: inline-block;
          padding: 0 .5em;
          color: ${colorSite.lightShade};
          background-color: rgba(${color.rgb.primaryShade}, 0.7);
          box-shadow: 1px 2px 2px -1px ${colorSite.light};
          border-radius: 3px;
          text-transform: uppercase;
          font-weight: 700;
          font-size: .75em;
          margin: 2px;
          opacity: 0;
        }
      }
      &:hover,
      &:focus {
        background: transparent;
        background-color: rgba(${color.rgb.primaryTint}, 0.1);
        &:before,
        .img {
          background: transparent;
          filter: grayscale(100%) contrast(1) brightness(90%);
        }
        .tags li {
          opacity: 1;
        }
      }
    }
    .img {
      border-radius: 4px;
      mix-blend-mode: multiply;
      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
      }
    }
  }  

  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-title {
      transform: rotate(3deg);
    }

    .project-description {
      &:hover {
        box-shadow: -6px 7px 7px -6px ${colorSite.primaryTint};        
      }
      @media (max-width: 768px) {
        &:hover {
          box-shadow: none;
        }
      }
    }

    .project-tech-list {
      justify-content: flex-end;
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }

    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
`