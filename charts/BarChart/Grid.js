import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

class Grid extends Component {
  render () {

    const { values, xSpacing, ySpacing, yModulus, chartWidth, yAxis, topPadding, chartHeight } = this.props
    
    return (
      <g transform={'translate(51,'+topPadding+')'}>
        {
          values.map((v, i) => (
            <rect
              x={i*xSpacing}
              y={0}
              key={i}
              width='1'
              height={chartHeight - ySpacing}
              style={{ fill: '#efefef' }}
              rx='2'
            />
          ))
        }
        {
          yAxis.map((y, i) => {
            if (y % yModulus === 0) return <rect
              x={0}
              y={i*ySpacing}
              key={i}
              width={chartWidth - xSpacing}
              height={1}
              style={{ fill: i === 0 || i === yAxis.length - 1 || y === 0 ? '#acacac' : '#efefef' }}
              rx='2'
            />
          })
        }
      </g>
    )
  }
}

export default Grid
