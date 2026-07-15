import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Movie from './pages/Movie/Movie.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import NoFooterLayout from './layouts/NoFooterLayout.jsx'
import SearchPage from './pages/SearchPage/SearchPage.jsx'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search",
        element: <SearchPage />
      }
    ]
  },
  {
    element: <NoFooterLayout />,
    children: [
      {
        path: "/movie/:id",
        element: <Movie />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
