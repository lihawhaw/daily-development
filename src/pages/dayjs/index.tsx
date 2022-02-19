import { DatePicker } from 'antd'
import React from 'react'

const { RangePicker } = DatePicker

export default function () {
  return (
    <div>
      <DatePicker
        onChange={v => {
          console.log('DatePicker', v)
        }}
      />

      <RangePicker
        showTime
        onChange={v => {
          console.log('RangePicker', v)
        }}
      />
    </div>
  )
}
