import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { RegisterDataType } from "../pages/Register";
import type { LoginDataType } from "../pages/Login";

type AuthContext = {
    registeredUser: RegisterDataType[];
    setRegisteredUser: Dispatch<SetStateAction<RegisterDataType[]>>;
    loggedInUser?: LoginDataType;
    setLoggedInUser: Dispatch<SetStateAction<LoginDataType | undefined>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const Auth = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [registeredUser, setRegisteredUser] = useState<RegisterDataType[]>(
        () => {
            const storedUser = localStorage.getItem("reg-user");
            return storedUser ? JSON.parse(storedUser) : [];
        },
    );

    const [loggedInUser, setLoggedInUser] = useState<LoginDataType | undefined>(
        () => {
            const storedLogUser = localStorage.getItem("log-user");
            return storedLogUser ? JSON.parse(storedLogUser) : undefined;
        },
    );
    return (
        <Auth.Provider
            value={{
                setRegisteredUser,
                registeredUser,
                loggedInUser,
                setLoggedInUser,
            }}
        >
            {children}
        </Auth.Provider>
    );
};
