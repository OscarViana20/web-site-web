import { css } from 'styled-components'

export const toastStyle = css`

  .top-left {
    top: 12px;
    left: 12px;
    transition: transform .6s ease-in;
    animation: toast-in-left .7s;
  }

  .top-right {
    top: 12px;
    right: 12px;
    transition: transform .6s ease-in-out;
    animation: toast-in-right .7s;
  }

  .bottom-left {
    bottom: 6em;
    left: 12px;
    transition: transform .6s ease-in;
    animation: toast-in-left .7s;
  }

  .bottom-right {
    bottom: 6em;
    right: 12px;
    transition: transform .6s ease-in-out;
    animation: toast-in-right .7s;
  }

  .bottom-center {
    bottom: 6em;
    /*left: 50%;*/
    transition: transform .6s ease-in-out;
    animation: toast-in-bottom .7s;
  }

  @keyframes toast-in-bottom {
    from {
      transform: translateY(100%);        
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);      
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);      
    }
    to {
      transform: translateX(0);
    }
  }

`