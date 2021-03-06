import { css } from 'styled-components'

import { color } from '../../utils/constants'
import { devices } from '../../utils/devices'

export const variables = css`
    :root {
        /* Color */
        --color-primary: rgb(${color.rgb.primary});
        --color-primary-shade: rgb(${color.rgb.primaryShade});
        --color-primary-tint: rgb(${color.rgb.primaryTint});
        --color-secondary: rgb(${color.rgb.secondary});
        --color-secondary-shade: rgb(${color.rgb.secondaryShade});
        --color-secondary-tint: rgb(${color.rgb.secondaryTint});
        --color-tertiary: rgb(${color.rgb.tertiary});
        --color-tertiary-shade: rgb(${color.rgb.tertiaryShade});
        --color-tertiary-tint: rgb(${color.rgb.tertiaryTint});
        --color-light: rgb(${color.rgb.light});
        --color-lightShade: rgb(${color.rgb.lightShade});
        --color-dark: rgb(${color.rgb.dark});
        --color-dark-shade: rgb(${color.rgb.darkShade});
        --color-dark-tint: rgb(${color.rgb.darkTint});
        --color-gray: rgb(${color.rgb.gray});
        --color-gray-dark: #cecdcc;
        --color-info: rgb(${color.rgb.info});
        --color-warning: rgb(${color.rgb.warning});
        --color-error: rgb(${color.rgb.error});

        /* Size */
        --size-text: 13px;
        --fz-h1: 2.3em;
        --fz-h2: 2em;
        --fz-h3: 1.6em;
        --fz-h4: 1.4em;    
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;

        /* Font */
        --font-content: 'Titillium Web', sans-serif;
        --font-title: 'Khand', sans-serif;
        --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;   

        /* Padding */
        --padding-content: 0.5em;
        --padding-block: 1em;

        /* Margin */
        --margin-block: 1em;
        --margin-text: 0.5em;

        /* z-index*/
        --z-index-scroll: 2;
        --z-index-social: 2;
        --z-index-menu: 3;
        --z-index-logo: 4;

        /* transitions */
        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        /* others */        
        --border-radius: 4px;
    } 

    @media ${devices.phablet} {
        :root {
            /* Size */
            --size-text: 16px;

            /* Padding */
            --padding-content: 0.7em;
            --padding-block: 1.5em;
            --padding-footer: 1em;
        }
    }

    @media ${devices.laptop} {
        :root {
            /* Size */
            --size-h2: 2em;
        }
    }
`