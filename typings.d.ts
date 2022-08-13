// import {EChartsConvertFinder} from 'echarts'
declare module '*.css'
declare module '*.less'
declare module '*.png'
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

declare module 'moment' {
  import { Dayjs } from 'dayjs'
  namespace moment {
    type Moment = Dayjs
  }
  export = moment
}

declare module 'echarts' {
  export interface ECharts {
    getZr(): EChartsZr
  }

  interface EChartsZr {
    on(eventName: string, handler: EChartsZrHandler, context?: object): void
  }

  interface Handler {
    offsetX: number
    offsetY: number
  }

  type EChartsZrHandler = (params: Handler) => void
}

declare module 'antd-dayjs-webpack-plugin'
