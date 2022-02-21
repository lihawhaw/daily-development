import breaks from '@bytemd/plugin-breaks'
import gfm from '@bytemd/plugin-gfm'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'
import { Editor } from '@bytemd/react'
import 'bytemd/dist/index.min.css'
import localZh from 'bytemd/lib/locales/zh_Hans.json'
import React, { useState } from 'react'

export const ArticleNew = () => {
  const [content, setContent] = useState('')

  console.log('content', content)
  return (
    <div>
      <Editor
        previewDebounce={500}
        locale={localZh}
        value={content}
        plugins={[gfm(), mediumZoom(), breaks(), mermaid()]}
        onChange={v => {
          setContent(v)
          // console.log('v', v)
        }}
      />
    </div>
  )
}

export default React.memo(ArticleNew)
