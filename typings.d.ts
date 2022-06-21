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
  // export as namespace moment
}

declare module 'echarts' {
  export interface ECharts {
    getZr: () => {
      on: (eventName: string, handler: Function, context?: object) => void
    }
  }
}

declare module 'antd-dayjs-webpack-plugin'
