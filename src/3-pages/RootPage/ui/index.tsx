import { GoogleAuthBtn } from '@shared/ui/buttons/GoogleAuthBtn'
import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

const RootPage: FC = (props) => {
  return (
    <div>
      <GoogleAuthBtn />
      <Outlet />
    </div>
  )
}

export default RootPage
