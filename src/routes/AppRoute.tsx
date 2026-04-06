import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import AuthProtected from "./AuthProtected";
import About from "../pages/About";
import Products from "../pages/Products";
import Home from "../pages/Home";
import ProductsDetail from "../pages/ProductsDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <App />,
                children: [
                    {
                        path: "",
                        element: <Home />,
                    },
                    {
                        path: "about",
                        element: <About />,
                    },
                    {
                        path: "products",
                        element: <Products />,
                    },
                    {
                        path: "products/:id",
                        element: <ProductsDetail />,
                    },
                ],
            },
        ],
    },
    {
        path: "/",
        element: <AuthProtected />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
]);

const AppRoute = () => {
    return <RouterProvider router={router} />;
};

export default AppRoute;
