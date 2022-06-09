import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { useLocation } from 'umi' // Redirect,
dayjs.locale('zh-cn')

export default function (props: { children: JSX.Element }) {
  const location = useLocation()
  // const isNotLogin = location.pathname != '/manage/login'
  const isManage = location.pathname === '/manage'
  if (isManage) return <>{props.children}</>
  // if (!getLocalStorage('auth') && isNotLogin) return <Redirect to='/manage/login' />

  return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>
}
