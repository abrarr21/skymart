import {
    ArrowLeft,
    Star,
    ShoppingCart,
    Heart,
    Truck,
    Shield,
    RotateCcw,
    ChevronRight,
    Tag as BadgeIcon,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { NavLink, useParams } from "react-router";
import { productData } from "../data/productData";

export default function ProductDetail() {
    const { id } = useParams();
    const prod = productData;
    console.log(prod);
    const product = prod.find((obj) => obj.id === Number(id));
    console.log(product);
    return (
        <main>
            <div className="animate-fade-in mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 font-body text-sm text-white/30">
                    <NavLink
                        className="flex items-center gap-1.5 transition-colors hover:text-white"
                        to="/products"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Products
                    </NavLink>
                    <span>/</span>
                    <span className="text-white/50 capitalize">
                        {product?.category}
                    </span>
                    <span>/</span>
                    <span className="clamp-1 max-w-50 text-white/70">
                        {product?.title}
                    </span>
                </nav>

                {/* Main Content */}
                <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:gap-16">
                    {/* Product Image */}
                    <div className="animate-scale-in flex aspect-square items-center justify-center rounded-3xl bg-white p-10">
                        <img
                            src={product?.image}
                            alt={product?.title}
                            className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="animate-fade-up flex flex-col gap-5">
                        <span className="badge flex w-fit items-center gap-1 rounded-full border border-volt/20 bg-volt/10 px-3 py-1 text-xs text-volt capitalize">
                            <BadgeIcon className="h-3 w-3" />
                            {product?.category}
                        </span>

                        <h1 className="font-heading text-2xl leading-tight font-bold text-white sm:text-3xl">
                            {product?.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-3.5 w-3.5 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/50 text-amber-400/50"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-white/70">
                                {product?.rating.rate}
                            </span>
                            <span className="text-sm text-white/30">
                                ({product?.rating.count} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="border-y border-white/80 py-4">
                            <span className="font-heading text-4xl font-bold text-volt">
                                ${product?.price}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="font-body text-sm leading-relaxed text-white/50">
                            {product?.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-volt py-3.5 font-heading text-base font-bold text-ink transition-all duration-200 hover:bg-volt-light active:scale-95">
                                <ShoppingCart className="h-5 w-5" />
                                Add to Cart
                            </button>
                            <button className="rounded-2xl border border-white/10 p-3.5 text-white/30 transition-all hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-400">
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Features */}
                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div className="rounded-2xl border border-white/80 bg-white/3 p-3 text-center">
                                <Truck className="mx-auto mb-1.5 h-4 w-4 text-volt" />
                                <p className="font-body text-[11px] font-semibold text-white/60">
                                    Free Delivery
                                </p>
                                <p className="font-body text-[10px] text-white/25">
                                    On orders $50+
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/80 bg-white/3 p-3 text-center">
                                <Shield className="mx-auto mb-1.5 h-4 w-4 text-volt" />
                                <p className="font-body text-[11px] font-semibold text-white/60">
                                    Secure Pay
                                </p>
                                <p className="font-body text-[10px] text-white/25">
                                    256-bit SSL
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/80 bg-white/3 p-3 text-center">
                                <RotateCcw className="mx-auto mb-1.5 h-4 w-4 text-volt" />
                                <p className="font-body text-[11px] font-semibold text-white/60">
                                    Easy Returns
                                </p>
                                <p className="font-body text-[10px] text-white/25">
                                    30-day policy
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="mt-6 flex gap-3">
                            <a
                                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-volt bg-volt px-4 py-3 font-heading text-sm font-semibold text-ink transition-all hover:bg-volt-light"
                                href="/products/2"
                            >
                                Next
                                <ChevronRight className="h-4 w-4" />
                            </a>
                        </div>

                        <section className="mt-12">
                            <h2 className="mb-6 font-heading text-2xl font-bold">
                                Related Products
                            </h2>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"></div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
