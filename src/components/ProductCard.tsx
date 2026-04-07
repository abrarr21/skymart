import { Star, ShoppingCart, Tag as BadgeIcon } from "lucide-react";
import type { ProductDataType } from "../data/productData";
import { NavLink } from "react-router";

const ProductCard = ({
    id,
    title,
    price,
    category,
    image,
    rating,
    delay = 0,
}: ProductDataType) => {
    return (
        <NavLink
            to={`/products/${id}`}
            className="product-card group animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#111] transition-all duration-200 hover:border-volt/50 hover:shadow-[0_0_25px_rgba(0,255,150,0.2)]"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative aspect-square overflow-hidden bg-white">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="badge absolute top-3 left-3 flex items-center gap-1 rounded-xl bg-black/60 px-2 py-1 text-xs text-white/80 capitalize backdrop-blur-sm">
                    <BadgeIcon className="h-3 w-3" />
                    {category}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
                {/* Title & Description */}
                <div className="mb-3">
                    <h3 className="mb-2 line-clamp-2 font-body text-base leading-snug font-semibold text-white">
                        {title}
                    </h3>
                </div>

                {/* Rating */}
                <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${
                                    i < Math.floor(rating.rate)
                                        ? "fill-amber-400 text-amber-400"
                                        : i === Math.floor(rating.rate) &&
                                            rating.rate % 1 >= 0.5
                                          ? "fill-amber-400 text-amber-400"
                                          : "fill-white/30 text-white/30"
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-medium text-white/50">
                        {rating.rate} ({rating.count})
                    </span>
                </div>

                {/* Price & Add Button */}
                <div className="mt-auto flex items-center justify-between border-t border-white/80 pt-4">
                    <span className="font-heading text-xl font-bold text-volt">
                        ${price}
                    </span>
                    <button className="flex items-center gap-2 rounded-xl bg-volt px-3 py-2 font-body text-xs font-semibold text-ink shadow-lg transition-all duration-200 hover:bg-volt-light hover:shadow-volt/25 active:scale-95">
                        <ShoppingCart className="h-3 w-3" />
                        Add
                    </button>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCard;
