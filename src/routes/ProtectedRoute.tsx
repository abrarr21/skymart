import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const { loggedInUser } = useAuth();

    useEffect(() => {
        if (!loggedInUser) {
            toast.error("Not authorized, please log in", {
                duration: 2000,
                position: "bottom-right",
            });
        }
    }, []);

    if (!loggedInUser) {
        return <Navigate to={"/login"} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
