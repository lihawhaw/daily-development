import { getThemeAtoms } from '@/store'
import { Button } from 'antd'
import { useAtom } from 'jotai'

export default function () {
  const { nextThemeAtom } = getThemeAtoms()
  const [curTheme, setCurTheme] = useAtom(nextThemeAtom)

  const toggleTheme = () => setCurTheme()

  return (
    <div>
      <h1>{curTheme}</h1>
      <Button onClick={toggleTheme}>变</Button>
    </div>
  )
}
