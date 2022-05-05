// import 'antd/dist/antd.min.css'

import { Outlet } from '@umijs/max'

export default function (props: { children: JSX.Element }) {
  return (
    <>
      <Outlet />
    </>
  )
}
