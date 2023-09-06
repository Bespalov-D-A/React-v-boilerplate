import { RootPage } from 'src/3-pages/RootPage'
import { type RouteObject } from 'react-router-dom'
import { MainPage } from '@pages/Main'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage/>,
    children: [{ index: true, element: <div>Welcome</div> }]
  },
  {
    path: '/app',
    element: <MainPage />
  }
]
