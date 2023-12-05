import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            }
        ]
    },
]);
export default router