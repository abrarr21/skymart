import { ArrowRight, Eye, Lock, Mail, Zap } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";

export interface LoginDataType {
    name?: string;
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, reset } = useForm<LoginDataType>();

    const [show, setShow] = useState(false);
    const { setLoggedInUser, registeredUser } = useAuth();
    const navigate = useNavigate();

    const onCommit = (data: LoginDataType) => {
        console.log(data);
        const user = registeredUser.find(
            (elem) =>
                elem.password === data.password && elem.email === data.email,
        );

        if (!user) {
            toast.error("Incorrect Email and Password", {
                duration: 2000,
                position: "bottom-right",
            });
            reset();
            return;
        }

        setLoggedInUser(user);
        localStorage.setItem("log-user", JSON.stringify(user));
        toast.success("Log in successful", {
            duration: 2000,
            position: "bottom-right",
        });
        reset();
        navigate("/");
    };
    return (
        <div className="flex min-h-screen bg-ink">
            <div className="relative hidden w-1/2 flex-col overflow-hidden border-r border-white/80 bg-[#111] p-12 lg:flex">
                <div className="pointer-events-none absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-volt/10 blur-3xl"></div>
                <div className="pointer-events-none absolute right-10 bottom-1/4 h-48 w-48 rounded-full bg-volt/5 blur-3xl"></div>
                <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-volt">
                        <Zap size={18} className="fill-ink text-ink" />
                    </div>
                    <span className="font-heading text-2xl font-bold text-txt">
                        Sky<span className="text-volt">Mart</span>
                    </span>
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-center">
                    <p className="mb-4 font-body text-sm font-medium tracking-widest text-volt uppercase">
                        Welcome back
                    </p>
                    <h1 className="mb-6 font-heading text-5xl leading-tight font-bold text-txt">
                        Shop the future.
                        <br />
                        <span className="text-volt">Today.</span>
                    </h1>
                    <p className="max-w-sm font-body text-base leading-relaxed text-white/40">
                        Thousands of products, lightning-fast delivery, and
                        prices that make your wallet happy.
                    </p>
                    <div className="mt-12 grid grid-cols-3 gap-4">
                        <div className="rounded-2xl border border-white bg-ink p-4 text-center">
                            <p className="font-heading text-xl font-bold text-volt">
                                20K+
                            </p>
                            <p className="mt-1 font-body text-xs text-white/40">
                                Products
                            </p>
                        </div>
                        <div className="rounded-2xl border border-txt bg-ink p-4 text-center">
                            <p className="font-heading text-xl font-bold text-volt">
                                50K+
                            </p>
                            <p className="mt-1 font-body text-xs text-white/40">
                                Users
                            </p>
                        </div>
                        <div className="rounded-2xl border border-txt bg-ink p-4 text-center">
                            <p className="font-heading text-xl font-bold text-volt">
                                4.9★
                            </p>
                            <p className="mt-1 font-body text-xs text-white/40">
                                Rating
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="mb-8 flex items-center justify-center gap-2 lg:hidden">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-volt">
                            <Zap size={18} className="fill-ink text-ink" />
                        </div>
                        <span className="font-heading text-xl font-bold text-txt">
                            Sky<span className="text-volt">Mart</span>
                        </span>
                    </div>
                    <div className="auth-card rounded-3xl border border-white/10 bg-[#111] p-6">
                        <h2 className="mb-1 font-heading text-2xl font-bold text-txt">
                            Sign in
                        </h2>
                        <p className="mb-8 font-body text-sm text-white/40">
                            Enter your credentials to continue
                        </p>
                        <form
                            onSubmit={handleSubmit(onCommit)}
                            className="space-y-4"
                        >
                            <div>
                                <div className="relative flex items-center rounded-2xl border border-white/8 bg-[#1d1d1d] p-3 focus-within:border-volt">
                                    <Mail size={18} className="text-txt/20" />
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full border-0 bg-transparent pl-4 text-white placeholder:text-txt/20 focus:border-0 focus:ring-0 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="relative flex items-center rounded-2xl border border-txt/8 bg-[#1d1d1d] p-3">
                                <Lock size={18} className="text-txt/20" />
                                <input
                                    {...register("password")}
                                    type={show ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full border-0 bg-transparent pl-4 text-white placeholder:text-txt/20 focus:border-0 focus:ring-0 focus:outline-none"
                                />
                                <button
                                    onClick={() => setShow((p) => !p)}
                                    type="button"
                                    className="absolute top-1/2 right-3.5 -translate-y-1/2 text-white/25 transition-colors hover:text-white/60"
                                >
                                    <Eye size={18} className="text-txt/20" />
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-volt py-3.5 font-heading font-bold text-ink hover:bg-volt-light"
                            >
                                Sign in <ArrowRight size={18} />
                            </button>
                        </form>
                        <p className="mt-6 text-center font-body text-sm text-white/30">
                            Don't have an account?{" "}
                            <NavLink
                                className="font-semibold text-volt transition-colors hover:text-volt-light"
                                to={"/register"}
                            >
                                Create one
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
