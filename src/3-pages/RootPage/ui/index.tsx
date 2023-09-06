import { GoogleAuthBtn } from '@shared/ui/buttons/GoogleAuthBtn'
import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

const RootPage: FC = (props) => {
  return (
    <div>
      <GoogleAuthBtn />
      WELCOME
      <button >CLICK</button>
      <Outlet />
    </div>
  )
}

export default RootPage
