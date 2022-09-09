import { useCallback } from 'react'
import { message, Modal } from 'antd'

function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}

export const useTestHook = () => {
  return useCallback(async () => {
    const hide = message.loading('hook-loading...', 0)

    await sleep(3000)

    Modal.confirm({
      title: 'title',
      content: 'content',
    })

    hide()
  }, [])
}
