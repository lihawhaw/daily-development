import { Divider, Input, Typography } from 'antd'
import React, { useState } from 'react'

const { Title, Paragraph } = Typography

export default function () {
  const [text, setText] = useState('测试https://api.lihaha.cn?api=v2 http://lihaha.cloud')

  const replaceSrc = (txt: string) => {
    const reg =
      /(((https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gi
    const result = txt.replace(reg, function (item) {
      return "<a href='" + item + "' target='_blank'>" + item + '</a>'
    })
    return result
  }
  return (
    <div>
      <Input.TextArea value={text} onChange={e => setText(e.target.value)} rows={5} />
      <Typography>
        <Title>自动识别链接</Title>
        <Divider />
        <Paragraph>{text}</Paragraph>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: replaceSrc(text) }}></div>
      </Typography>
    </div>
  )
}
