import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'

import './global.css'
import '../assets/fonts/Inter/inter.css'
import { rootRoute } from './pages/__root'
import { IndexRoute } from './pages'
import { AboutRoute } from './pages/about'

const routeTree = rootRoute.addChildren([
    IndexRoute,
    AboutRoute,
])

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
