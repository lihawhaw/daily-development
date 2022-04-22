// import 'antd/dist/antd.min.css'
import { Outlet } from 'umi'

export default function (props: { children: JSX.Element }) {
  return (
    <>
      {props.children}
      <Outlet />
    </>
  )
}
