import { DatePicker } from 'antd'

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
