import styled from 'styled-components'
import { color } from '../../utils/constants'
import { ToastType } from '../../utils/enum'

function getColor (type, opacity) {
  switch (type) {
    case ToastType.ERROR: return `rgba(${color.rgb.error}, ${opacity})`
    case ToastType.WARNING: return `rgba(${color.rgb.warning}, ${opacity})`
    default: return `rgba(${color.rgb.info}, ${opacity})`
  }
}

export const ToastContent = styled.div`

    font-size: 14px;
    box-sizing: border-box;    
    position: fixed;

    &:hover {
        box-shadow: 0 0 12px #fff;
        opacity: 1;
        transition: .3s ease;
        pointer-events: auto;
        border-radius: 3px 3px 3px 3px;
        box-shadow: 0 0 10px #999;
        color: #000;
        opacity: .9;
        background-position: 15px;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    button {
        cursor: pointer;
        right: .5em;
        top: .9em;
        float: right;
        font-weight: 700;
        color: #fff;
        outline: none;
        border: none;
        text-shadow: 0 1px 0 #fff;
        opacity: .8;
        line-height: 1;
        font-size: 16px;
        padding: 0 !important;
        background: 0 0;
        border: 0;
        z-index: 5;
        background: transparent !important;

        &:hover{
            color: #000;
            text-shadow: 0 1px 0 #000;
        }
    }

    .toast__message {
        padding-left: 1em;
        padding-right: 1em;
    }

    .toast {
        width: 100%;
        color: #fff;
        padding: 15px 15px 15px 10px;
    }

    .notification {
        transition: .3s ease;
        pointer-events: auto;
        border-radius: 3px 3px 3px 3px;
        box-shadow: 0 0 10px #999;
        opacity: .9;
        background-position: 15px;
        background-repeat: no-repeat;
        background-color: ${props => getColor(props.type, 0.6)};
    }

    .notification-message {
        margin: 0;
        text-align: left;
        margin-left: -1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .notification-image {
        float: left;
        margin-right: 15px;
    }

`