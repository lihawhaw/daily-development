import { useTestHook } from '@/pages/antd-example/message/hook'
import { Button, message } from 'antd'

export default function () {
  const testHook = useTestHook()

  const onMsgLoading = () => {
    const hide = message.loading('loading...')

    setTimeout(hide, 3000)
  }

  const onTestHook = () => testHook()

  return (
    <div>
      <Button onClick={onMsgLoading}>click</Button>
      <Button onClick={onTestHook}>testHook</Button>
    </div>
  )
}
