import {
    Package,
    TrendingUp,
    Star,
    Tag,
    ArrowRight,
    Zap,
    Monitor,
    Shirt,
    Sofa,
    Dumbbell,
    Watch,
    Shield,
    HomeIcon,
} from "lucide-react";
import { useAuth } from "../context/useAuth";
import { NavLink } from "react-router";
import {
    perCategoryCountResult,
    premiumItems,
    topRatedItems,
} from "../data/productData";
import FeatureItem from "../components/FeautreItem";

export default function Home() {
    const { loggedInUser } = useAuth();

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="relative mb-10 overflow-hidden rounded-3xl border border-white/80 bg-[#111] p-8 sm:p-12">
                <div className="relative z-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                    <div>
                        <p className="mb-3 font-body text-sm tracking-widest text-volt/70 uppercase">
                            Good morning 👋
                        </p>
                        <h1 className="mb-4 font-heading text-4xl leading-tight font-bold text-white sm:text-5xl">
                            Welcome back,
                            <br />
                            <span className="text-volt">
                                {loggedInUser?.name}!
                            </span>
                        </h1>
                        <p className="max-w-md font-body text-white/40">
                            Discover today's picks — hand-curated products
                            across electronics, fashion, and more.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <NavLink
                                className="flex items-center gap-2 rounded-2xl bg-volt px-4 py-3 text-ink hover:bg-volt-light"
                                to="/products"
                            >
                                Shop Now
                                <ArrowRight className="h-4 w-4" />
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white/60 hover:border-white/40"
                                to="/products"
                            >
                                View All Products
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex shrink-0 flex-col gap-3">
                        <div className="rounded-2xl border border-volt/20 bg-volt/10 px-6 py-4 text-center">
                            <p className="font-heading text-4xl font-bold text-volt">
                                20+
                            </p>
                            <p className="mt-1 font-body text-xs text-white/40">
                                Products Available
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/80 bg-ink px-6 py-4 text-center">
                            <p className="font-heading text-2xl font-bold text-white">
                                Free
                            </p>
                            <p className="mt-1 font-body text-xs text-white/40">
                                Delivery on ₹999+
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stagger mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                <div className="flex items-start gap-4 rounded-3xl border border-white/80 bg-[#111] p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-volt/10 text-volt">
                        <Package className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="font-heading text-2xl font-bold text-white">
                            0
                        </p>
                        <p className="font-body text-sm text-white/50">
                            Cart Items
                        </p>
                        <p className="mt-0.5 font-body text-xs text-white/25">
                            In your bag
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl border border-white/80 bg-[#111] p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                        <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="font-heading text-2xl font-bold text-white">
                            $0.00
                        </p>
                        <p className="font-body text-sm text-white/50">
                            Cart Value
                        </p>
                        <p className="mt-0.5 font-body text-xs text-white/25">
                            Ready to checkout
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl border border-white/80 bg-[#111] p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                        <Star className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="font-heading text-2xl font-bold text-white">
                            5
                        </p>
                        <p className="font-body text-sm text-white/50">
                            Top Products
                        </p>
                        <p className="mt-0.5 font-body text-xs text-white/25">
                            Highly rated
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl border border-white/80 bg-[#111] p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                        <Tag className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="font-heading text-2xl font-bold text-white">
                            6
                        </p>
                        <p className="font-body text-sm text-white/50">
                            Categories
                        </p>
                        <p className="mt-0.5 font-body text-xs text-white/25">
                            To explore
                        </p>
                    </div>
                </div>
            </div>

            <section className="mb-10">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="font-heading text-xl font-bold">
                        Shop by Category
                    </h2>
                    <NavLink
                        className="flex items-center gap-1 text-sm text-volt transition-colors hover:text-volt-light"
                        to={`/products`}
                    >
                        View All
                        <ArrowRight className="h-3.5 w-3.5" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <NavLink
                        className="group rounded-2xl border border-white/20 bg-white p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/95"
                        to="/products?category=electronics"
                    >
                        <Monitor className="mx-auto mb-3 h-12 w-12 text-gray-700 group-hover:text-gray-900" />
                        <p className="font-body text-sm font-semibold text-ink/80 capitalize">
                            electronics
                        </p>
                        <p className="mt-1 text-xs text-ink/50">
                            {perCategoryCountResult?.electronics ?? 0} items
                        </p>
                    </NavLink>
                    <NavLink
                        className="group rounded-2xl border border-white/20 bg-white p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/95"
                        to="/products?category=clothing"
                    >
                        <Shirt className="mx-auto mb-3 h-12 w-12 text-gray-700 group-hover:text-gray-900" />
                        <p className="font-body text-sm font-semibold text-ink/80 capitalize">
                            clothing
                        </p>
                        <p className="mt-1 text-xs text-ink/50">
                            {perCategoryCountResult?.clothing ?? 0} items
                        </p>
                    </NavLink>
                    <NavLink
                        className="group rounded-2xl border border-white/20 bg-white p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/95"
                        to="/products?category=furniture"
                    >
                        <Sofa className="mx-auto mb-3 h-12 w-12 text-gray-700 group-hover:text-gray-900" />
                        <p className="font-body text-sm font-semibold text-ink/80 capitalize">
                            furniture
                        </p>
                        <p className="mt-1 text-xs text-ink/50">
                            {perCategoryCountResult?.furniture ?? 0} items
                        </p>
                    </NavLink>
                    <NavLink
                        className="group rounded-2xl border border-white/20 bg-white p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/95"
                        to="/products?category=home"
                    >
                        <HomeIcon className="mx-auto mb-3 h-12 w-12 text-gray-700 group-hover:text-gray-900" />
                        <p className="font-body text-sm font-semibold text-ink/80 capitalize">
                            home & kitchen
                        </p>
                        <p className="mt-1 text-xs text-ink/50">
                            {perCategoryCountResult["home & kitchen"]} items
                        </p>
                    </NavLink>
                    <NavLink
                        className="group rounded-2xl border border-white/20 bg-white p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/95"
                        to="/products?category=sports"
                    >
                        <Dumbbell className="mx-auto mb-3 h-12 w-12 text-gray-700 group-hover:text-gray-900" />
                        <p className="font-body text-sm font-semibold text-ink/80 capitalize">
                            sports
                        </p>
                        <p className="mt-1 text-xs text-ink/50">
                            {perCategoryCountResult?.sports ?? 0} items
                        </p>
                    </NavLink>
                    <NavLink
                        className="group rounded-2xl border border-white/20 bg-white p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/95"
                        to="/products?category=accessories"
                    >
                        <Watch className="mx-auto mb-3 h-12 w-12 text-gray-700 group-hover:text-gray-900" />
                        <p className="font-body text-sm font-semibold text-ink/80 capitalize">
                            personal care
                        </p>
                        <p className="mt-1 text-xs text-ink/50">
                            {perCategoryCountResult["personal care & beauty"] &&
                                0}{" "}
                            items
                        </p>
                    </NavLink>
                </div>
            </section>

            <section className="mb-8">
                <FeatureItem
                    items={topRatedItems.slice(0, 5)}
                    cardName={"Top Rate"}
                />
                <FeatureItem
                    items={premiumItems.slice(0, 5)}
                    cardName={"Premium Products"}
                />
            </section>

            {/* Product sections */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-[#111] p-5">
                    <Zap className="h-6 w-6 text-volt" />
                    <div>
                        <p className="font-body text-sm font-semibold text-white/80">
                            Fast Delivery
                        </p>
                        <p className="text-xs text-white/30">
                            Same-day on select items
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-[#111] p-5">
                    <Shield className="h-6 w-6 text-blue-400" />
                    <div>
                        <p className="font-body text-sm font-semibold text-white/80">
                            Secure Payments
                        </p>
                        <p className="text-xs text-white/30">
                            100% encrypted checkout
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-[#111] p-5">
                    <Tag className="h-6 w-6 text-green-400" />
                    <div>
                        <p className="font-body text-sm font-semibold text-white/80">
                            Best Prices
                        </p>
                        <p className="text-xs text-white/30">
                            Price-match guarantee
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
