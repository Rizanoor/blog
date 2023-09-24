import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Homepage from "../pages";
import About from "../pages/About";
import Post from "../pages/blogs/_id";
import Blog from "../pages/blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/blog/:id",
                element: <Post/>
            }
        ]
    },
]);