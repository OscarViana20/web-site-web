const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    phablet: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    tablet_first: '767px',
    laptop_first: '1023px'
}

export const devices = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    phablet: `(min-width: ${size.phablet})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,    
    tablet_first: `(max-width: ${size.tablet_first})`,
    laptop_first: `(max-width: ${size.laptop_first})`
}