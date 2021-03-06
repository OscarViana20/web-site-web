import { colorSite, size, font } from '../../utils/siteConstants'

export const color = {
  blue: '#323e7b',
  fuchsia: '#d04290',
  blueLight: '#41c7c7',
  acuamarine: '#85eba2',
  terracotta: '#fe6a6a',
  yellow: '#fbf34c'
}

export const theme = {
  axis: {
    ticks: {
      line: { fill: colorSite.darkTint, stroke: colorSite.light },
      text: {
        fill: colorSite.light,
        fontFamily: font.content
      }
    },
    legend: {
      text: {
        fill: colorSite.primaryTint,
        fontSize: size.text.content,
        fontFamily: font.content,
        fontWeight: 'bold'
      }
    }
  },
  grid: {
    line: { stroke: colorSite.darkTint, strokeDasharray: '1 2', strokeOpacity: 0.4 }
  },
  tooltip: {
    container: {
      background: colorSite.light,
      color: colorSite.dark,
      fontSize: size.text.content,
      borderRadius: 0
    }
  },
  labels: {
    text: {
      fill: colorSite.light,
      fontWeight: 200,
      fontFamily: font.content
    }
  }
}
