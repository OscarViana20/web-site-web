import React from 'react'
import { Bump } from '@nivo/bump'

import { color as rgbColor } from '../../utils/constants'
import { color, theme } from '../../styles/components/chart'

const CustomPoint = ({ x, y, isInactive, size, borderColor, borderWidth, data }) => {
  return (
      <g transform={`translate(${x}, ${y})`} style={{ pointerEvents: 'none' }}>
          <circle
            r={size}
            fill={`rgb(${rgbColor.rgb.dark})`}
            stroke={borderColor}
            strokeWidth={borderWidth}
          />
          {!isInactive && (
              <text textAnchor="middle" y={4} fill={`rgb(${rgbColor.rgb.light})`} style={{ fontSize: 10}} fontWeight='100'>
                  {Math.round(data.percentage)}%
              </text>
          )}
      </g>
  )
}
  
export const SkillsChart = ({ data }) => (
  <Bump    
    width= {800}
    height= {360}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    theme={theme}
    margin={{ top: 20, right: 100, bottom: 30, left: 100 }}
    activeLineWidth={4}
    inactiveLineWidth={3}
    inactiveOpacity={0.15} 
    axisLeft={{
      format: d => (''),
    }}
    axisRight={{
      legend: 'Prioridad de uso',
      legendPosition: 'middle',
      legendOffset: 80,
      format: d => ('')
    }}
    data={data}
    spacing= {80}
    pointComponent={CustomPoint}
    pointSize={18}
    activePointSize={20}
    inactivePointSize={0}
    pointBorderWidth={4}
    activePointBorderWidth={4}
    inactivePointBorderWidth={1}
    pointBorderColor={{ from: 'serie.color' }}
    colors={[color.yellow, color.fuchsia, color.blue, color.acuamarine, color.blueLight, color.terracotta]}
    startLabel={d => (d.id)}
  />
)