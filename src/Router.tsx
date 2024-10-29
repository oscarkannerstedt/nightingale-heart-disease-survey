import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Survey } from "./pages/Survey"
import { Result } from "./pages/Result"
import { NotFound } from "./pages/NotFound"
import { Layout } from "./pages/Layout"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/survey",
                element: <Survey></Survey>
            },
            {
                path: "/result",
                element: <Result></Result>
            }


        ]
    }
])