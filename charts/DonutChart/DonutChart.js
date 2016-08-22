import React, { Component, PropTypes } from 'react'
import d3 from 'd3'

import Path from './Path'
import Legend from './Legend'


class DonutChart extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    padAngle: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string.isRequired
  }

  static defaultProps = {
    width: 450,
    height: 250,
    padAngle: 0,
    colors: [
      '#f0800c',
      '#ffb365',
      '#bbc7d9',
      '#34a7fa',
      '#0a3d62'
    ]
  }

  componentWillMount() {
    const { colors } = this.props;

    this.pie = d3.layout.pie()
      .value((d) => { return d.value })
      .padAngle(this.props.padAngle).sort(null);

    this.color = d3.scale.ordinal().range(colors);
  }

  render () {
    const { id, height, data, width } = this.props

    if (!data) return null

    return (
      <div>
        <svg
          id={id}
          width={width}
          height={height}
          className='shadow'
        >
          <Path
            width={width}
            height={height}
            pie={this.pie}
            color={this.color}
            data={data}
          />
          <Legend
            pie={this.pie}
            color={this.color}
            data={data}
            width={width}
            height={height}
          />
        </svg>
      </div>
    )
  }
}

export default DonutChart
