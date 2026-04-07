import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ProductDataType } from "../data/productData";

type CartItem = ProductDataType & {
    quantity: number;
};

type CartContextType = {
    cartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    cartItems: CartItem[];
    addToCart: (product: ProductDataType) => void;
    removeFromCart: (id: number) => void;
    incQuantity: (id: number) => void;
    decQuantity: (id: number) => void;
    clearCart: () => void;
    totalAmount: number;
    totalNumberOfItems: number;
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
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: ProductDataType) => {
        setCartItems((prev) => {
            const exist = prev.find((item) => item.id === product.id);
            if (exist) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const incQuantity = (id: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const decQuantity = (id: number) => {
        setCartItems((prev) => {
            const temp = prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            );
            return temp.filter((item) => item.quantity > 0);
        });
    };

    const clearCart = () => setCartItems([]);

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );

    const totalNumberOfItems = cartItems.length;

    return (
        <Cart.Provider
            value={{
                cartOpen,
                openCart: () => setCartOpen(true),
                closeCart: () => setCartOpen(false),
                addToCart,
                removeFromCart,
                incQuantity,
                decQuantity,
                clearCart,
                cartItems,
                totalAmount,
                totalNumberOfItems,
            }}
        >
            {children}
        </Cart.Provider>
    );
};
