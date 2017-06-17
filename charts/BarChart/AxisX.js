import React, {Component, PropTypes} from 'react'
import {Motion, spring} from 'react-motion'

class AxisX extends Component {
  render() {
    const {
      values, chartHeight, chartWidth, xTitle, xSpacing, topPadding, xModulus,
    } = this.props

    return (
      <g
        transform={`translate(51, ${(topPadding + chartHeight)})`}
      >
        {
          values.map((v, i) => {
            if (i % xModulus === 0) {
              return (
                <text x={i * xSpacing - 15} y={15} key={i}>
                  {
                    v.xValue.getMonth
                    ? `${v.xValue.getMonth()}.${v.xValue.getFullYear()}`
                    : v.xValue
                  }
                </text>
              )
            }
          })
        }
        {
          xTitle && (
            <text
              x={((values.length - 1) * xSpacing) / 2 - (xTitle.length * 4)}
              y={40}
            >
              {xTitle}
            </text>
          )}
      </g>
    )
  }
}

export default AxisX
