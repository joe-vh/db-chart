import React, { Component, PropTypes } from 'react'
import d3 from 'd3'

class Legend extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array,
    pie: PropTypes.func,
    color: PropTypes.func
  }

  createChart () {
    const { color, data, pie } = this.props

    const texts = pie(data).map((d, i) => {

      const transform = 'translate(10,' + i * 30 + ')'

      const rectStyle = {
        fill: this.props.color(i),
        stroke: this.props.color(i)
      }

      const textStyle = {
        fontFamily: 'Helvetica Neue'
        // fill: _self.props.color(i)
      }

      return (
        <g transform={transform} key={i}>
          <rect
            width='5'
            height='20'
            style={rectStyle}
            rx='2'
            rx='2'
          />
          <text
            x='10'
            y='15'
            className='browser-legend'
            style={{fontWeight: 'bold', ...textStyle}}
          >
            {d.data.value + '% '}
          </text>
          <text
            x='50'
            y='15'
            className='browser-legend'
            style={textStyle}
          >
            {d.data.name}
          </text>
        </g>
      )
    })

    return texts
  }

  render () {
    const style = {
      visibility: 'visible'
    }

    // if (this.props.width <= this.props.height + 70) {
    //   style.visibility = 'hidden'
    // }

    const texts = this.createChart()
    const transform = 'translate(50,55)' // '+(this.props.width/2+80)+'

    return(
      <g is transform={transform} style={style}>
        {texts}
      </g>
    )
  }
}

export default Legend
