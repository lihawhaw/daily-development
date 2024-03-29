import DataSet from '@antv/data-set/lib'
import { Chart } from '@antv/g2'
import { useLayoutEffect } from 'react'
import styles from './index.css'

export const ChartCom = () => {
  useLayoutEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/top2000.json')
      .then(res => res.json())
      .then(data => {
        const ds = new DataSet()
        const dv = ds
          .createView('test')
          .source(data)
          .transform({
            as: ['count'],
            groupBy: ['release'],
            operations: ['count'],
            type: 'aggregate',
          })
          .transform({
            type: 'sort-by',
            fields: ['release'],
            order: 'ASC',
          })

        const chart = new Chart({
          container: styles.chartContainer,
          autoFit: true,
          height: 500,
        })
        chart.data(dv.rows)
        chart.scale({
          count: {
            alias: 'top2000 唱片总量',
            nice: false,
          },
          release: {
            tickInterval: 5,
            alias: '唱片发行年份',
          },
        })
        chart.interval().position('release*count')

        chart.option('scrollbar', {
          type: 'horizontal',
        })
        chart.interaction('element-visible-filter')
        chart.interaction('plot-mousewheel-scroll', {
          start: [{ trigger: 'plot:mousewheel', action: 'mousewheel-scroll:scroll', arg: { wheelDelta: 5 } }],
        })
        chart.render()
      })
  }, [])

  return <div className={styles.chartContainer} id={styles.chartContainer}></div>
}
