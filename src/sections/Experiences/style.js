import styled from 'styled-components'

export const ExperiencesContent = styled.div`

  display: flex;
  width: 100%;

  .years {
    width: 35%;
    border-right: 1px solid white;

    .year {
      z-index: 1;
      font-family: sans-serif;
      font-size: 6em;
      position: relative;
      top: 1em;
      left: 0.3em;
      opacity: 0.3;
      color: white;
    }
  }

  .experiences {
      
      width: 65%;
      padding: 0em 0em 0 1em;
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(6, 1fr);
      align-items: center;

      .experiences-content {        
        position: relative;
        grid-column: 1 / 5;
        display: block;        
        @media (max-width: 1080px) {
          grid-column: 4 / 1;
        }
      }

      .company {
          font-size: 0.9em;
          font-weight: 600;
          margin: 1em 0 0.5em;
      }
  
      .position {
          font-size: 1em;
          font-weight: 900;
      }
  
      .year {
          font-size: 0.85em;
          z-index: 1;
          right: 0;
          padding: 0.3em 0.5em;
          color: #fff;
          border: 2px solid #fff;
      }
  
      .link {
        grid-column: 5 / -1;
        grid-row: 1 / -1;
        position: relative;
        z-index: 1;
        cursor: pointer;

        @media (max-width: 768px) {
          height: 100%;
        }
  
        .img {
            max-width: 100%;
            box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.7);
            transform: translate3d(0, 0, 0);
            border-radius: 50%;
            position: relative;
            z-index: 1;
        }
      }    
  }
  
  &:nth-of-type(odd) {
    .experiences-content {
      grid-column: 3 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 4 / -1;
      }
    }    

    .link {
      grid-column: 1 / 3;
    }
  } 

  &:not(:last-of-type) {
    margin-bottom: 50px;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
      .years {
          display: none;
      }

      .experiences {
        width: 100%;
      }

      .link 
      .img {
        &:hover {
          box-shadow: 0 0 5px 7px rgba(255, 255, 255, 0.7);
        }
      }      
  }  
`