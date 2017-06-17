import React, {Component, PropTypes} from 'react'
import {Motion, spring} from 'react-motion'

class Bars extends Component {
  constructor() {
    super()

    // setStates and rectStyle color change
    // included for example - remove if needed

    this.state = {
      activeBar: null,
      activeText: null,
    }
  }

  render() {
    const {
      values, xSpacing, ySpacing, yAxis, topPadding,
    } = this.props

    return (
      <g
        transform={`translate(51, ${(topPadding)})`}
      >
        <text>
          {this.state.activeText}
        </text>
        {
          values.map((v, i) => {
            // negative adjustment to subtract the
            // positive bars position from the origin axis

            const negAdjust = v.yValue > 0 ? v.yValue * ySpacing : null
            const origin = ySpacing * yAxis.indexOf(0)

            let rectStyle = {fill: v.yValue > 0 ? '#091f2f' : '#4492b4'}
            if (this.state.activeBar === i) {
              rectStyle = {fill: '#f00'};
            }

            return (
              <Motion
                key={i}
                defaultStyle={{
                  barHeight: 0,
                  y: origin,
                }}
                style={{
                  barHeight: spring(Math.abs(v.yValue) * ySpacing),
                  y: spring(origin - negAdjust),
                }}>
                  {
                    ({barHeight, y}) => (
                      <rect
                        x={i * xSpacing - 1}
                        y={y}
                        key={i}
                        width="3"
                        onClick={() => {
                          this.setState({
                            activeText: `Bar number ${i} with value ${v.yValue}`,
                          })
                        }}
                        onMouseMove={() => this.setState({activeBar: i})}
                        onMouseOut={() => this.setState({activeBar: null})}
                        height={barHeight}
                        style={rectStyle}
                        rx="2"
                      />
                    )
                  }
              </Motion>
            )
          })
        }
      </g>
    )
  }
}

export default Bars
