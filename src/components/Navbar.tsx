import { LogOut, ShoppingCart, Zap } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const { loggedInUser, setLoggedInUser } = useAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        setLoggedInUser(undefined);
        localStorage.removeItem("log-user");
        toast.success("Log out successfully", {
            duration: 2000,
            position: "bottom-right",
        });
        navigate("/login");
    };

    const { openCart } = useCart();

    return (
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
            <a
                aria-current="page"
                className="active flex shrink-0 items-center gap-2"
                href="/"
            >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-volt">
                    <Zap size={18} className="fill-ink text-ink" />
                </div>
                <span className="font-heading text-lg font-bold">
                    Sky<span className="text-volt">Mart</span>
                </span>
            </a>
            <nav className="hidden items-center gap-6 md:flex">
                <NavLink
                    aria-current="page"
                    className={({ isActive }) =>
                        `${isActive ? "text-volt" : "text-[#919191]"} text-sm hover:text-white/80`
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? "text-volt" : "text-[#919191]"} text-sm hover:text-white/80`
                    }
                    to="/products"
                >
                    Shop
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? "text-volt" : "text-[#919191]"} text-sm hover:text-white/80`
                    }
                    to="/about"
                >
                    About
                </NavLink>
            </nav>
            <div className="flex shrink-0 items-center gap-2">
                <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 sm:flex">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-volt text-xs font-bold text-ink">
                        {loggedInUser?.name?.charAt(0).toUpperCase()}
                    </div>
                    <span className="max-w-25 truncate font-body text-sm text-white/70">
                        {loggedInUser?.name}
                    </span>
                </div>
                <button
                    onClick={openCart}
                    className="relative cursor-pointer rounded-xl border border-white/10 bg-ink p-2.5 transition-all"
                >
                    <ShoppingCart size={18} />
                </button>
                <button
                    onClick={onLogout}
                    title="Logout"
                    className="cursor-pointer rounded-xl border border-white/10 bg-ink p-2.5 text-white/60 transition-all hover:border-red-500/30 hover:bg-red-500/20 hover:text-red-400"
                >
                    <LogOut size={18} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
