import React, {Component, PropTypes} from 'react'
import {Motion, spring} from 'react-motion'

class AxisY extends Component {
  render() {
    const {
      yAxis, ySpacing, yTitle, yUnit, chartHeight, yModulus, topPadding,
    } = this.props

    return (
      <g
        transform={`translate(0, ${topPadding})`}
        >
        {
          yAxis.map((y, i) => {
            if (y % yModulus === 0) {
              return (
                <text x="5" y={i * ySpacing + 5} key={i}>
                  {y+yUnit}
                </text>
              )
            }
          })
        }
        {
          yTitle && (
            <text
              x={0}
              y={chartHeight / 2 - (5 * yTitle.length)}
              >
              {yTitle}
            </text>
          )
        }
      </g>
    )
  }
}

export default AxisY
