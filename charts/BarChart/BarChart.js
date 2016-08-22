import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Bars from './Bars'
import Grid from './Grid'
import AxisX from './AxisX'
import AxisY from './AxisY'

class BarChart extends Component {

  // @todo upload to github with MIT license

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    topPadding: PropTypes.number,
    bottomPadding: PropTypes.number,
    id: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    width: 900, // 650,
    height: 450, // 250,
    topPadding: 30,
    bottomPadding: 50,
    title: 'test',
    xTitle: 'Xtitle',
    yTitle: null,
    xModulus: 52,
    yModulus: 10,
    xUnit: null,
    yUnit: null,
    yAxisRounding: 10,
    values: [
      {xValue: 0, yValue: 1},
      {xValue: 1, yValue: 1},
      {xValue: 2, yValue: 1},
      {xValue: 3, yValue: 1},
      {xValue: 4, yValue: 1},
      {xValue: 5, yValue: 1},
      {xValue: 6, yValue: 1},
      {xValue: 7, yValue: 1}
    ],

  }

  componentWillMount () {

    // set initial chart axes, height, width and unit spacing

    const { values, width, height, topPadding, bottomPadding, yAxisRounding } = this.props

    this.chartHeight = height - topPadding - bottomPadding
    this.chartWidth = width - 100

    let max = 0
    let min = 0

    values.map((v, i) => {
      if (max < v.yValue) max = v.yValue
      if (min > v.yValue) min = v.yValue
    })

    let yMin = Math.floor(min/yAxisRounding)*yAxisRounding
    let yMax = Math.ceil(max/yAxisRounding)*yAxisRounding

    let i = yMax
    let yAxis = []

    while (i >= yMin) {
      yAxis.push(i)
      i -= 1
    }

    this.yAxis = yAxis

    this.xSpacing = this.chartWidth/values.length
    this.ySpacing = this.chartHeight/this.yAxis.length

  }

  render () {

    const { width, height, id, topPadding, bottomPadding, values, xUnit, yUnit, title, xTitle, yTitle, xModulus, yModulus } = this.props

    if (!values) return null

    return (
      <div>
        <h3>{title}</h3>
        <svg
          id={id}
          width={width}
          height={height}
        >
          <Grid
            yAxis={this.yAxis}
            xSpacing={this.xSpacing}
            ySpacing={this.ySpacing}
            chartHeight={this.chartHeight}
            chartWidth={this.chartWidth}
            topPadding={topPadding}
            bottomPadding={bottomPadding}
            values={values}
            yModulus={yModulus}
          />
          <AxisX
            yAxis={this.yAxis}
            xSpacing={this.xSpacing}
            ySpacing={this.ySpacing}
            chartWidth={this.chartWidth}
            chartHeight={this.chartHeight}
            topPadding={topPadding}
            bottomPadding={bottomPadding}
            values={values}
            xTitle={xTitle}
            xModulus={xModulus}
          />
          <AxisY
            yAxis={this.yAxis}
            xSpacing={this.xSpacing}
            ySpacing={this.ySpacing}
            chartHeight={this.chartHeight}
            topPadding={topPadding}
            bottomPadding={bottomPadding}
            values={values}
            yUnit={yUnit}
            yTitle={yTitle}
            yModulus={yModulus}
          />
          <Bars
            yAxis={this.yAxis}
            xSpacing={this.xSpacing}
            ySpacing={this.ySpacing}
            chartHeight={this.chartHeight}
            topPadding={topPadding}
            bottomPadding={bottomPadding}
            values={values}
          />
        </svg>
      </div>
    )
  }
}

export default BarChart
