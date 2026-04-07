import {
    X,
    ShoppingBag,
    PackageOpen,
    Plus,
    Minus,
    Trash2,
    ArrowRight,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function Cart() {
    const navigate = useNavigate();
    const {
        cartOpen,
        closeCart,
        cartItems,
        totalAmount,
        incQuantity,
        decQuantity,
        removeFromCart,
        clearCart,
    } = useCart();

    const closeCartFn = () => {
        toast.success("Order placed", {
            duration: 2000,
            position: "bottom-right",
        });
        clearCart();
        closeCart();
    };

    return (
        <>
            {cartOpen && (
                <div
                    onClick={closeCart}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                />
            )}

            <aside
                className={`fixed top-0 right-0 z-50 flex h-full w-full flex-col border-l border-white/10 bg-[#111] transition-transform duration-300 sm:w-[420px] ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/8 px-6 py-5">
                    <div className="flex items-center gap-3">
                        <ShoppingBag size={20} className="text-volt" />
                        <h2 className="font-heading text-lg font-bold">Cart</h2>
                        {cartItems.length > 0 && (
                            <span className="text-xs text-volt">
                                {cartItems.length} items
                            </span>
                        )}
                    </div>
                    <button
                        onClick={closeCart}
                        className="rounded-xl p-2 text-white/50 hover:bg-white/8 hover:text-white"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 space-y-3 overflow-y-auto px-6 py-4">
                    {cartItems.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
                            <PackageOpen size={36} className="text-white/20" />
                            <p className="font-heading text-white/70">
                                Cart is empty
                            </p>
                            <button
                                onClick={() => {
                                    navigate("/products");
                                    closeCart();
                                }}
                                className="cursor-pointer rounded-2xl bg-volt p-3 text-sm font-semibold text-ink"
                            >
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 rounded-2xl border border-white/8 bg-white/4 p-3"
                            >
                                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-xl bg-white p-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="line-clamp-2 font-body text-sm text-white/80">
                                        {item.title}
                                    </p>
                                    <p className="font-heading font-bold text-volt">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2,
                                        )}
                                    </p>
                                    <div className="mt-2 flex items-center gap-2">
                                        <button
                                            onClick={() => decQuantity(item.id)}
                                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/8 hover:bg-white/15"
                                        >
                                            <Minus size={11} />
                                        </button>
                                        <span className="w-5 text-center text-sm font-bold">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => incQuantity(item.id)}
                                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/8 hover:bg-white/15"
                                        >
                                            <Plus size={11} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="ml-auto text-red-400/60 hover:text-red-400"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="space-y-4 border-t border-white/8 px-6 py-5">
                        <div className="flex items-center justify-between">
                            <span className="font-body text-sm text-white/50">
                                Total
                            </span>
                            <span className="font-heading text-2xl font-bold">
                                ${totalAmount.toFixed(2)}
                            </span>
                        </div>
                        <button
                            onClick={closeCartFn}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-volt py-3.5 text-base font-bold text-ink"
                        >
                            Checkout <ArrowRight size={18} />
                        </button>
                    </div>
                )}
            </aside>
        </>
    );
}
