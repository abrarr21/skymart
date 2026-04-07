import { Star, ArrowRight, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router";
import type { ProductDataType } from "../data/productData";

type FeatureProp = {
    items: ProductDataType[];
    cardName: string;
};

const FeatureItem = ({ items, cardName }: FeatureProp) => {
    return (
        <div className="mb-4 rounded-3xl border border-white/50 bg-ink p-6">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-white">
                    <Star className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                    {cardName}
                </h2>
                <NavLink
                    className="flex items-center gap-1 text-xs text-volt hover:text-volt-light"
                    // to="/products?sort=rating"
                    to={"/products"}
                >
                    See all
                    <ArrowRight className="h-3 w-3" />
                </NavLink>
            </div>

            {/* Items List */}
            <div className="space-y-2">
                {items.map((item) => (
                    <NavLink
                        key={item.id}
                        to={"#"}
                        className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/3 p-3 transition-all duration-200 hover:border-volt/30 hover:bg-white/6"
                    >
                        {/* Image */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                            <p className="clamp-1 text-xs font-semibold text-white/80">
                                {item?.title}
                            </p>
                            <p className="mt-0.5 font-heading text-sm font-bold text-volt">
                                ${item.price}
                            </p>
                        </div>

                        {/* Add Button */}
                        <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-volt/10 text-volt transition-all group-hover:scale-110 hover:bg-volt hover:text-ink">
                            <ShoppingBag className="h-3.5 w-3.5" />
                        </button>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default FeatureItem;
