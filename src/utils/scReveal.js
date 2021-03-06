import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const scReveal = isSSR ? null : ScrollReveal();

export default scReveal;