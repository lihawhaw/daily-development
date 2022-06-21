import React from 'react'
import Echarts from './echarts'

export default class EchartsPage extends React.Component {
  public render() {
    return (
      <div>
        <Echarts width={800} height={300} />
      </div>
    )
  }
}
