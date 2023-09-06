import { Suspense, type FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../config/createRouter'

const Routing: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Routing
