import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage";
import Quiz from "../Pages/Quiz";

const router = createBrowserRouter([
    {
        path :'/',
        element:<Main/>,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path: '/quiz',
                element: <Quiz/>
            }
        ]
    }
])

export default router;