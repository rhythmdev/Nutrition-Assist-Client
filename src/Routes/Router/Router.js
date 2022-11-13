import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyReviews from "../../Pages/Reviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import AddServices from "../../Pages/Home/Services/AddServices";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EditReview from "../../Pages/Reviews/EditReview/EditReview";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch("https://nutrition-assist-server.vercel.app/services"),
      },
      {
        path: "/details/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://nutrition-assist-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/editReview/:id",
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nutrition-assist-server.vercel.app/reviews/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
