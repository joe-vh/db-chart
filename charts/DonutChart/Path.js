import React, { Component, PropTypes } from 'react'
import d3 from 'd3'

class Path extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array,
    pie: PropTypes.func,
    color: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.createChart = this.createChart.bind(this)
  }

  componentWillMount () {
    const radius = this.props.height

    const outerRadius = radius / 2
    const innerRadius = radius / 2.3

    this.arc = d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius)

    this.transform = 'translate(' + radius / 2 + ',' + radius / 2 + ')'
  }

  createChart () {
    const { color, data, pie } = this.props, { arc } = this

    const paths = pie(data).map((d, i) => {
      return <path fill={color(i)} d={arc(d)} key={i} stroke='white' strokeWidth='3' />
    })

    return paths
  }

  render () {
    const paths = this.createChart()

    return (
      <g transform={this.transform}>
        {paths}
      </g>
    )
  }
}

export default Path
