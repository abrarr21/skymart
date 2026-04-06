// ProductsPage.jsx - Simplified products page
import { Search, ChevronDown } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { productData, type ProductDataType } from "../data/productData";

const products: ProductDataType[] = productData;

export default function Products() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
                    All Products
                </h1>
                <p className="font-body text-sm text-white/40">
                    {products.length} products found
                </p>
            </div>

            {/* Filters */}
            <div className="mb-6 rounded-2xl border border-white/80 bg-[#111] p-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                        <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-white/25" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="field focus:outine-none h-10 w-full rounded-2xl border border-volt bg-[#1d1d1d] pr-8 pl-10 focus:border-volt focus:ring-0"
                            value=""
                        />
                    </div>

                    <div className="relative rounded-2xl border border-white/30 bg-[#1D1D1D] focus-within:border-volt">
                        <select className="h-10 min-w-[160px] cursor-pointer appearance-none border-0 p-2 pr-8 text-txt focus:border-0 focus:ring-0 focus:outline-none">
                            <option className="text-ink" value="all">
                                All Categories
                            </option>
                            <option className="text-ink" value="electronics">
                                Electronics
                            </option>
                            <option className="text-ink" value="clothing">
                                Clothing
                            </option>
                            <option className="text-ink" value="furniture">
                                Furniture
                            </option>
                            <option className="text-ink" value="home">
                                Home
                            </option>
                            <option className="text-ink" value="sports">
                                Sports
                            </option>
                            <option className="text-ink" value="accessories">
                                Accessories
                            </option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-3.5 w-3.5 -translate-y-1/2 text-white/25" />
                    </div>

                    <div className="relative rounded-2xl border border-white/30 bg-[#1D1D1D] focus-within:border-volt">
                        <select className="h-10 min-w-[160px] cursor-pointer appearance-none border-0 p-2 pr-8 text-txt focus:border-0 focus:ring-0 focus:outline-none">
                            <option value="default">Featured</option>
                            <option value="price-asc">Price Low → High</option>
                            <option value="price-desc">Price High → Low</option>
                            <option value="rating-desc">Top Rated</option>
                            <option value="rating-asc">Lowest Rated</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-3.5 w-3.5 -translate-y-1/2 text-white/25" />
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
