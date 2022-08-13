import { ChartCom } from '@/pages/data-analysis/chart'
import { ChartCom2 } from '@/pages/data-analysis/chart2'
import { Divider } from 'antd'

export default function DataAnalysis() {
  return (
    <div>
      <h1>直方图</h1>
      <Divider />
      <ChartCom />
      <Divider />
      <ChartCom2 />
    </div>
  )
}
