import { getLocalStorage } from '@/utils'
import { Redirect, useLocation } from 'umi'

export default function (props: { children: JSX.Element }) {
  const location = useLocation()
  const isNotLogin = location.pathname != '/manage/login'
  const isManage = location.pathname === '/manage'
  if (isManage) return <>{props.children}</>
  if (!getLocalStorage('auth') && isNotLogin) return <Redirect to='/manage/login' />
  return <>{props.children}</>
}
