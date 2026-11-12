import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Inbox from './components/Inbox.jsx'
import Github from './components/Github.jsx'
import githubLoader from './components/githubloader.js'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
    
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "inbox",
        element: <Inbox />
      },
      {
        path: "github",
        element: <Github />,
        loader: githubLoader ,
      
      }
    ]
  }
])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="inbox" element={<Inbox />} />
//     </Route>
//   ),
// );




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
    
      {/* <App /> */}
    
  </StrictMode>,
)
