const entries = [
    { label: 'Java', url: '#experiences', target: '_top' },
    { label: 'SQL', url: '#experiences', target: '_top' },
    { label: 'React', url: '#experiences', target: '_top' },
    { label: 'Typescript', url: '#experiences', target: '_top' },
    { label: 'Javascript', url: '#experiences', target: '_top' },
    { label: 'Flutter', url: '#experiences', target: '_top' },
    { label: 'Ionic', url: '#experiences', target: '_top' },
    { label: 'HTML 5', url: '#experiences', target: '_top' },
    { label: 'Angular', url: '#experiences', target: '_top' },
    { label: 'Javascript', url: '#experiences', target: '_top' },
    { label: 'npm', url: '#experiences', target: '_top' },
    { label: 'Node JS', url: '#experiences', target: '_top' },
    { label: 'Git', url: '#experiences', target: '_top' },
    { label: 'NoSQL', url: '#experiences', target: '_top' },
    { label: 'REST', url: '#experiences', target: '_top' },
    { label: 'jQuery', url: '#experiences', target: '_top' },
    { label: 'CSS', url: '#experiences', target: '_top' },
    { label: 'JSON', url: '#experiences', target: '_top' },
    { label: 'Vue.js', url: '#experiences', target: '_top' }
]
    
export const settings = {
    entries: entries,
    radius: '65%',
    width: 400,
    height: 400,
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#1d1d1d',
    opacityOver: 1,
    opacityOut: 0.5,
    opacitySpeed: 0.5,
    fov: 800,
    speed: 0.5,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#FFFFFF',
    fontWeight: 'bold', //bold
    fontStyle: 'normal', //italic 
    fontStretch: 'narrower', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: false,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '12',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'bold', //bold
    tooltipFontStyle: 'normal', //italic 
    tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10    
}

export const priority = [
    { percentage: 100, leyend: 'Java'},
    { percentage: 100, leyend: 'SQL'},
    { percentage: 50, leyend: 'NoSQL'},
    { percentage: 100, leyend: 'HTML & (S)CSS'},
    { percentage: 100, leyend: 'Angular'},
    { percentage: 95, leyend: 'React'},
    { percentage: 50, leyend: 'Node.js'},
    { percentage: 75, leyend: 'TypeScript'},
    { percentage: 100, leyend: 'JavaScript'}
]

export const chart = [
   {
      "id":"Angular.js",
      "data":[
         { "x":2017, "y": 1, "rank":1, "percentage":100 },
         { "x":2018, "y": 1, "rank":1, "percentage":100 },
         { "x":2019, "y": 1, "rank":1, "percentage":25 },
         { "x":2020, "y": 5, "rank":5, "percentage":10 }
      ]
   },
   {
      "id":"Angular",
      "data":[
         { "x":2017, "y": null, "rank":null, "percentage":null },
         { "x":2018, "y": 2, "rank":2, "percentage":25 },
         { "x":2019, "y": 2, "rank":2, "percentage":50 },
         { "x":2020, "y": 1, "rank":1, "percentage":100 }
      ]
   },
   {
      "id":"React",
      "data":[
         { "x":2017, "y": null, "rank":null, "percentage":null },
         { "x":2018, "y": null, "rank":null, "percentage":null },
         { "x":2019, "y": 3, "rank":3, "percentage":50 },
         { "x":2020, "y": 2, "rank":2, "percentage":95 }
      ]
   },
   {
      "id":"Ember",
      "data":[
         { "x":2017, "y": 4, "rank":4, "percentage":20 },
         { "x":2018, "y": 5, "rank":5, "percentage":10 },
         { "x":2019, "y": 5, "rank":5, "percentage":10 },
         { "x":2020, "y": null, "rank":null, "percentage":null }
      ]
   },
   {
      "id":"Vue.js",
      "data":[
         { "x":2017, "y": null, "rank":null, "percentage":null },
         { "x":2018, "y": 4, "rank":4, "percentage":25 },
         { "x":2019, "y": 4, "rank":4, "percentage":25 },
         { "x":2020, "y": 3, "rank":3, "percentage":50 }
      ]
   },
   {
      "id":"Svelte",
      "data":[
         { "x":2017, "y": null, "rank":null, "percentage":null },
         { "x":2018, "y": null, "rank":null, "percentage":null },
         { "x":2019, "y": null, "rank":null, "percentage":null },
         { "x":2020, "y": 4, "rank":4, "percentage":20 }
      ]
   }
]