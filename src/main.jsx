import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './Authentication/sign-in'
// import { Home } from 'lucide-react'
import Dashboard from './dashboard'
import Home from './home'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './dashboard/resume/[resumeid]/edit'
import ViewResume from './my-resume/[resumeid]/view'

const router = createBrowserRouter([
  {
    element:<App/>,
      children:[
       
        {
          path:'/dashboard',
          element:<Dashboard/>
        },
        {
          path:'/dashboard/resume/:resumeid/edit',
          element:<EditResume/>
        }
      ]
   
  },
  {
    path:'/',
    element:<Home/>
  },
  
  {
    path:'/Authentication/sign-in',
    element:<SignInPage/>
  },
  {
    path:'/my-resume/:resumeid/view',
    element:<ViewResume/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
