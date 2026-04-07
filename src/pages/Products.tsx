import { Search, ChevronDown, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { productData, type ProductDataType } from "../data/productData";
import { useState } from "react";

const products: ProductDataType[] = productData;

export default function Products() {
    const [searchItemQuery, setSearchItemQuery] = useState("");
    const [categorySelected, setCategorySelected] = useState("all");
    const [sort, setSort] = useState("default");

    const showClearBtn =
        searchItemQuery !== "" ||
        categorySelected !== "all" ||
        sort !== "default";

    const filteredProducts = products
        .filter(
            (elem) =>
                categorySelected === "all" ||
                elem.category.toLowerCase() === categorySelected,
        )
        .filter(
            (p) =>
                p.title.toLowerCase().includes(searchItemQuery.toLowerCase()) ||
                p.category
                    .toLowerCase()
                    .includes(searchItemQuery.toLowerCase()),
        );

    const activeFilter: { type: string; label: string; clear: () => void }[] = [
        searchItemQuery && {
            type: "search",
            label: `"${searchItemQuery}"`,
            clear: () => setSearchItemQuery(""),
        },
        categorySelected !== "all" && {
            type: "category",
            label: categorySelected,
            clear: () => setCategorySelected("all"),
        },
        sort !== "default" && {
            type: "sort",
            label: sort,
            clear: () => setSort("default"),
        },
    ].filter(Boolean) as { type: string; label: string; clear: () => void }[];

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sort === "lowToHigh") return a.price - b.price;
        if (sort === "highToLow") return b.price - a.price;
        if (sort === "topRated") return b.rating.rate - a.rating.rate;
        if (sort === "lowestRated") return a.rating.rate - b.rating.rate;
        return 0;
    });

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
                            onChange={(e) => {
                                setSearchItemQuery(e.target.value);
                            }}
                            type="text"
                            placeholder="Search products..."
                            className="h-10 w-full appearance-none rounded-2xl border border-white/20 bg-[#1d1d1d] pr-8 pl-10 transition-all duration-100 focus:border-volt focus:ring-0 focus:outline-none"
                            value={searchItemQuery}
                        />
                        {showClearBtn && (
                            <button className="absolute top-1/2 right-3 -translate-y-1/2 text-white/25 hover:text-white/60">
                                <X
                                    onClick={() => setSearchItemQuery("")}
                                    size={13}
                                />
                            </button>
                        )}
                    </div>

                    <div className="relative rounded-2xl border border-white/30 bg-[#1D1D1D] focus-within:border-volt">
                        <select
                            value={categorySelected}
                            onChange={(e) => {
                                setCategorySelected(e.target.value);
                            }}
                            className="h-10 min-w-40 cursor-pointer appearance-none border-0 p-2 pr-8 text-txt focus:border-0 focus:ring-0 focus:outline-none"
                        >
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
                        <select
                            onChange={(e) => {
                                setSort(e.target.value);
                            }}
                            value={sort}
                            className="h-10 min-w-40 cursor-pointer appearance-none border-0 p-2 pr-8 text-txt focus:border-0 focus:ring-0 focus:outline-none"
                        >
                            <option value="default">Featured</option>
                            <option value="lowToHigh">Price Low → High</option>
                            <option value="highToLow">Price High → Low</option>
                            <option value="topRated">Top Rated</option>
                            <option value="lowestRated">Lowest Rated</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-3.5 w-3.5 -translate-y-1/2 text-white/25" />
                    </div>
                </div>

                {activeFilter.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 border-t border-white/80 pt-3">
                        {activeFilter.map((filter) => (
                            <span
                                key={filter.type}
                                className="flex cursor-pointer items-center gap-1 rounded-2xl border border-volt/20 bg-volt/10 px-2 text-xs text-volt"
                            >
                                {filter.label}
                                <button onClick={filter.clear}>
                                    <X size={14} />
                                </button>
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
