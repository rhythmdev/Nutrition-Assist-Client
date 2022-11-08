import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
 {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <Root/>,
 }
])

export default router;