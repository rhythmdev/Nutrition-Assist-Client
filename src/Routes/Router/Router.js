import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from '../../Pages/Home/Home/Home'
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyReviews from "../../Pages/Reviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import AddServices from '../../Pages/Home/Services/AddServices'
import ReviewCard from "../../Pages/Reviews/ReviewCard";

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
         path: '/login',
         element: <Login/>
      },
      {
         path: '/register',
         element: <Register/>
      },
      
      {
         path: '/blog',
         element: <Blog/>
      },
      {
         path: '/myreviews',
         element: <MyReviews/>
      },
      {
         path: '/addservice',
         element: <AddServices/>
      },
      {
         path: '/reviewcard',
         element: <ReviewCard/>
      }

    ]
 }
])

export default router;