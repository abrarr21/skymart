import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type CartContextType = {
    cartOpen: Boolean;
    openCart: () => void;
    closeCart: () => void;
};

const Cart = createContext<CartContextType | null>(null);

export const useCart = () => {
    const context = useContext(Cart);

    if (!context) {
        throw new Error("useCart must be within cart provider");
    }

    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <Cart.Provider
            value={{
                cartOpen,
                openCart: () => setCartOpen(true),
                closeCart: () => setCartOpen(false),
            }}
        >
            {children}
        </Cart.Provider>
    );
};
