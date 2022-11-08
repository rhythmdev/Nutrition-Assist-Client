import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from '../../Pages/Home/Home/Home'

const router = createBrowserRouter([
 {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <Root/>,
    children: [
      {
         path: '/',
         element: <Home/>
      },
      {
         path: '/home',
         element: <Home/>
      },
      {
         path: '/blog',
         element: <Blog/>
      }

    ]
 }
])

export default router;