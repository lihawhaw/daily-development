import breaks from '@bytemd/plugin-breaks'
import gfm from '@bytemd/plugin-gfm'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'
import { Editor } from '@bytemd/react'
import 'bytemd/dist/index.min.css'
import localZh from 'bytemd/lib/locales/zh_Hans.json'
import React from 'react'

interface Props {
  value: string
  // eslint-disable-next-line no-unused-vars
  onChange: (content: string) => void
}

export function BaseEditor(props: Props) {
  return (
    <>
      <Editor
        locale={localZh}
        value={props.value}
        plugins={[gfm(), mediumZoom(), breaks(), mermaid()]}
        // onChange={v => {
        //   console.log('v', v)
        //   props.onChange(v)
        // }}
      />
    </>
  )
}

export default React.memo(BaseEditor)
