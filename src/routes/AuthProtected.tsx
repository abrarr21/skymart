import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const AuthProtected = () => {
    const { loggedInUser } = useAuth();

    if (loggedInUser) {
        return <Navigate to={"/"} />;
    }
    return <Outlet />;
};

export default AuthProtected;
