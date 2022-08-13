import DataSet from '@antv/data-set/lib'
import { Chart } from '@antv/g2'
import { useLayoutEffect } from 'react'
import styles from './index.css'
// import Tooltip from '@antv/g2/lib/chart/controller/tooltip'
// import { Chart, registerAction, registerComponentController } from '@antv/g2/lib/core'
// import { ActiveRegion } from '@antv/g2/src/interaction/action/active-region'
// const aaa = new ActiveRegion()
// registerComponentController('tooltip', Tooltip)
// registerAction('active-region', aaa)

/**
 * 自定义引入
 * https://github.com/antvis/G2/blob/master/src/index.ts
 */

export const ChartCom2 = () => {
  useLayoutEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then(res => res.json())
      .then(data => {
        const ds = new DataSet()
        const dv = ds.createView('diamond').source(data)
        dv.transform({
          type: 'bin.histogram',
          field: 'depth',
          binWidth: 4, // 在此修改矩形的宽度，代表真实数值的大小
          as: ['depth', 'count'],
        })

        const chart = new Chart({
          container: styles.chartContainer2,
          autoFit: true,
          height: 500,
        })
        chart.data(dv.rows)

        chart.scale({
          depth: {
            tickInterval: 4,
          },
          count: {
            nice: true,
          },
        })

        // chart.tooltip({
        //   position: 'top',
        //   shared: true,
        //   showMarkers: false,
        // })

        /**
         * 自定义模板
         * https://g2.antv.vision/zh/docs/manual/tutorial/tooltip/#%E8%87%AA%E5%AE%9A%E4%B9%89-html-%E6%A8%A1%E6%9D%BF
         */
        chart.tooltip({
          shared: true,
          customContent: (name, items) => {
            const container = document.createElement('div')
            container.className = 'g2-tooltip'
            const title = `<div class="g2-tooltip-title" style="margin-top: 12px;margin-bottom: 12px;">${name}</div>`
            let listItem = ''
            items.forEach(item => {
              listItem += `<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;display:flex;align-items: center;">
                              <span style="display:inline-flex;flex:1;justify-content:space-between">
                              <span style="margin-right: 16px;">阿巴阿巴:</span><span>${item?.value}</span>
                              </span>
                          </li>`
            })
            container.innerHTML = title + listItem
            return container
          },
        })

        //   chart.tooltip({
        //     triggerOn: 'mousemove' , // tooltip 的触发方式，默认为 mousemove
        //     showTitle: true, // 是否展示 title，默认为 true
        //     crosshairs: {
        //       type: 'rect', // || 'x' || 'y' || 'cross',
        //       style: {
        //         // 图形样式
        //       }
        //     }, // tooltip 辅助线配置
        //     offset: 10, // tooltip 距离鼠标的偏移量
        //     containerTpl: '<div class="g2-tooltip">'
        //       + '<div class="g2-tooltip-title" style="margin:10px 0;"></div>'
        //       + '<ul class="g2-tooltip-list"></ul></div>', // tooltip 容器模板
        //     itemTpl: '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}</li>', // tooltip 每项记录的默认模板
        //     inPlot: true, // 将 tooltip 展示在指定区域内
        //     follow: true， // tooltip 是否跟随鼠标移动
        //   shared: true || false, // 默认为 true, false 表示只展示单条 tooltip
        //     position: 'left' || 'right' || 'top' || 'bottom' // 固定位置展示 tooltip
        // });

        chart.interval().position('depth*count')

        chart.interaction('element-highlight')
        chart.interaction('active-region')
        chart.render()
      })
  }, [])

  return <div className={styles.chartContainer2} id={styles.chartContainer2}></div>
}
