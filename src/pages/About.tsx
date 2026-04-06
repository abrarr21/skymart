import {
    Zap,
    Package,
    Users,
    Star,
    Truck,
    ShieldCheck,
    HeartHandshake,
    ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";

const stats = [
    { icon: Package, number: "20K+", label: "Products" },
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: Star, number: "4.9", label: "Avg. Rating" },
    { icon: Truck, number: "99%", label: "On-time Delivery" },
];

const values = [
    {
        icon: ShieldCheck,
        title: "Trust",
        desc: "Every product is verified for quality and authenticity before listing.",
    },
    {
        icon: Truck,
        title: "Speed",
        desc: "We obsess over delivery times so your orders arrive when promised.",
    },
    {
        icon: HeartHandshake,
        title: "Community",
        desc: "Built around real customer feedback, not just business metrics.",
    },
    {
        icon: Star,
        title: "Quality",
        desc: "We curate the best — no filler, no junk, just great products.",
    },
];

const team = [
    {
        name: "Aryan Shah",
        role: "Founder & CEO",
        color: "bg-volt",
        letter: "A",
    },
    {
        name: "Priya Mehta",
        role: "Head of Product",
        color: "bg-blue-500",
        letter: "P",
    },
    {
        name: "Rohan Verma",
        role: "Lead Engineer",
        color: "bg-purple-500",
        letter: "R",
    },
    {
        name: "Sneha Kapoor",
        role: "Design Director",
        color: "bg-rose-500",
        letter: "S",
    },
];

export default function AboutPage() {
    return (
        <div className="animate-fade-in mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Hero */}
            <div className="mb-16 text-center">
                <div className="animate-float mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-volt">
                    <Zap className="h-7 w-7 fill-ink text-ink" />
                </div>
                <h1 className="mb-5 font-heading text-4xl font-bold sm:text-5xl">
                    About <span className="text-volt">SkyMart</span>
                </h1>
                <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-white/40">
                    SkyMart is a next-generation e-commerce platform built to
                    make online shopping fast, fair, and enjoyable — for
                    everyone.
                </p>
            </div>

            {/* Stats */}
            <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={idx}
                            className="rounded-2xl border border-white/80 bg-[#111] p-5 text-center"
                        >
                            <Icon className="mx-auto mb-2 h-5 w-5 text-volt" />
                            <p className="font-heading text-2xl font-bold text-white">
                                {stat.number}
                            </p>
                            <p className="mt-1 font-body text-xs text-white/30">
                                {stat.label}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Our Story */}
            <div className="mb-12 rounded-3xl border border-white/80 bg-[#111] p-8 sm:p-10">
                <h2 className="mb-4 font-heading text-2xl font-bold">
                    Our Story
                </h2>
                <div className="space-y-4 font-body text-sm leading-relaxed text-white/50">
                    <p>
                        SkyMart started in 2022 as a small side project — two
                        engineers tired of bloated, slow e-commerce experiences.
                        We asked ourselves: what if shopping online was actually{" "}
                        <em className="text-white/70">enjoyable</em>?
                    </p>
                    <p>
                        Three years later, SkyMart serves over 50,000 customers
                        across the country. We stock electronics, fashion,
                        jewelry, and everyday essentials — all at prices that
                        don't require a second mortgage.
                    </p>
                    <p>
                        We're still the same team at heart: obsessed with speed,
                        transparency, and making you feel good about every
                        purchase you make here.
                    </p>
                </div>
            </div>

            {/* What We Stand For */}
            <section className="mb-12">
                <h2 className="mb-6 text-center font-heading text-2xl font-bold">
                    What We Stand For
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {values.map((value, idx) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={idx}
                                className="flex gap-4 rounded-2xl border border-white/80 bg-[#111] p-6 transition-all duration-200 hover:border-volt/25"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-volt/10">
                                    <Icon className="h-4.5 w-4.5 text-volt" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-heading text-base font-bold text-white">
                                        {value.title}
                                    </h3>
                                    <p className="font-body text-sm leading-relaxed text-white/40">
                                        {value.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Team */}
            <section className="mb-12">
                <h2 className="mb-6 text-center font-heading text-2xl font-bold">
                    Meet the Team
                </h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {team.map((member, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-white/80 bg-[#111] p-5 text-center"
                        >
                            <div
                                className={`h-12 w-12 ${member.color} mx-auto mb-3 flex items-center justify-center rounded-2xl font-heading text-xl font-bold text-white`}
                            >
                                {member.letter}
                            </div>
                            <p className="font-body text-sm font-semibold text-white/80">
                                {member.name}
                            </p>
                            <p className="mt-0.5 text-xs text-white/30">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="rounded-3xl border border-volt/20 p-8 text-center">
                <h2 className="mb-3 font-heading text-2xl font-bold text-white">
                    Ready to shop?
                </h2>
                <p className="mb-6 font-body text-sm text-white/40">
                    Explore thousands of products at unbeatable prices.
                </p>
                <NavLink
                    className="inline-flex items-center gap-2 rounded-2xl bg-volt px-8 py-3.5 font-heading text-base font-bold text-ink hover:bg-volt-light"
                    to="/products"
                >
                    Browse Products
                    <ArrowRight className="h-4.5 w-4.5" />
                </NavLink>
            </div>
        </div>
    );
}
