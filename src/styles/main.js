import{ createGlobalStyle } from 'styled-components'

import { transitions } from  './defaults/transitions'
import { variables } from './defaults/variables'
import { defaults } from './defaults/global'
import { buttonStyle } from './components/button'
import { inputStyle } from './components/input'
import { scrollButtonStyle } from './components/scrollButton'
import { toastStyle } from './components/toast'

export const GlobalStyle = createGlobalStyle`
  ${transitions}
  ${variables}
  ${defaults}

  /* Components */
  ${buttonStyle}
  ${inputStyle}
  ${scrollButtonStyle}
  ${toastStyle}
`