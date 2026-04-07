import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./routes/AppRoute.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <CartProvider>
            <AppRoute />
            <Toaster />
        </CartProvider>
    </AuthProvider>,
);
