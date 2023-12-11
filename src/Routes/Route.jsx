import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
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
                path: '/serviceDetails',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/aboutUs',
                element: <About></About>
            }
        ]
    },
]);
export default router