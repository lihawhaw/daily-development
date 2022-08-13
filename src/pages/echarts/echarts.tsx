import * as echarts from 'echarts'
import { EChartOption, ECharts } from 'echarts'
import React from 'react'

export interface IEchartsProps {
  width?: number
  height?: number
  options?: EChartOption
}

export default class Echarts extends React.Component<IEchartsProps> {
  public id: HTMLDivElement | undefined | null

  public myChart = null as unknown as ECharts

  public componentDidMount() {
    if (!this.id) return
    this.myChart = echarts.init(this.id)
    this.myChart.setOption({
      series: [
        {
          name: 'AAA',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210],
          yAxisIndex: 0,
        },
        {
          name: 'BBB',
          type: 'line',
          yAxisIndex: 1,
          data: [220, 182, 191, 234, 290, 320, 1],
        },
      ],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
      },
      yAxis: [
        {
          type: 'value',
          name: 'AAA',
          min: 0,
          max: 230,
          interval: 230 / 5,
        },
        {
          type: 'value',
          name: 'BBB',
          min: 0,
          max: 330,
          interval: 330 / 5,
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            opacity: 0.3,
          },
        },
        backgroundColor: 'rgba(51, 51, 51, 0.6)',
      },
      legend: {
        data: ['AAA', 'BBB'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
    })
    window.addEventListener('resize', this.resize)

    this.myChart.getZr().on('click', params => {
      const pointInPixel = [params.offsetX, params.offsetY]
      if (this.myChart.containPixel('grid', pointInPixel)) {
        const xIndex = this.myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
        const op = this.myChart.getOption()
        const XAxis = op.xAxis as EChartOption.XAxis[]
        console.log('data', XAxis[0].data?.[xIndex])
      }
    })
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  public componentDidUpdate() {
    this.refresh()
  }

  public refresh = () => {
    // const { options } = this.props;
    // this.myChart.setOption(options);
  }

  public resize = () => {
    this.myChart.resize()
  }

  public render() {
    const { height, width } = this.props
    return <div ref={id => (this.id = id)} style={{ width: `${width}px`, height: `${height}px` }} />
  }
}
