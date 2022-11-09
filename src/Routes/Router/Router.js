import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from '../../Pages/Home/Home/Home'
import Services from "../../Pages/Home/Services/Services";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

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
         path: '/services',
         element: <Services/>,
         loader: () => fetch('http://localhost:5000/services')
      },
      {
         path: '/details/:id',
         element: <ServiceDetails/>,
         loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
   
      },
      
      {
         path: '/blog',
         element: <Blog/>
      }

    ]
 }
])

export default router;