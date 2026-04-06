import { ArrowRight, Eye, Lock, Mail, User, Zap } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";

export interface RegisterDataType {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<RegisterDataType>({
        mode: "onChange",
    });
    const password = useWatch({ control, name: "password" });

    const { setRegisteredUser, registeredUser } = useAuth();

    const onCommit = (data: RegisterDataType) => {
        console.log(data);
        const newUser = [...registeredUser, data];
        setRegisteredUser(newUser);
        localStorage.setItem("reg-user", JSON.stringify(newUser));
        toast.success("User created", {
            duration: 2000,
            position: "bottom-right",
        });
        reset();
        navigate("/login");
    };
    return (
        <div className="flex h-screen items-center justify-center bg-ink">
            <div className="w-full max-w-md">
                <div className="mb-8 flex items-center justify-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-volt">
                        <Zap size={18} className="fill-ink text-ink" />
                    </div>
                    <span className="font-heading text-xl font-bold text-txt">
                        Sky<span className="text-volt">Mart</span>
                    </span>
                </div>
                <div className="auth-card rounded-3xl border border-white/10 bg-[#111] p-6">
                    <h2 className="mb-1 font-heading text-2xl font-bold text-txt">
                        Create account
                    </h2>
                    <p className="mb-8 font-body text-sm text-white/40">
                        Join SkyMart and start shopping
                    </p>
                    <form
                        onSubmit={handleSubmit(onCommit)}
                        className="space-y-4"
                    >
                        <div>
                            <div className="relative flex items-center rounded-2xl border border-white/8 bg-[#1d1d1d] p-3 focus-within:border-volt">
                                <User size={18} className="text-txt/20" />
                                <input
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border-0 bg-transparent pl-4 text-white placeholder:text-txt/20 focus:border-0 focus:ring-0 focus:outline-none"
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-2 ml-3 text-sm text-volt">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="relative flex items-center rounded-2xl border border-white/8 bg-[#1d1d1d] p-3 focus-within:border-volt">
                                <Mail size={18} className="text-txt/20" />
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Invalid email",
                                        },
                                    })}
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full border-0 bg-transparent pl-4 text-white placeholder:text-txt/20 focus:border-0 focus:ring-0 focus:outline-none"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-2 ml-3 text-sm text-volt">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="relative flex items-center rounded-2xl border border-white/8 bg-[#1d1d1d] p-3 focus-within:border-volt">
                                <Lock size={18} className="text-txt/20" />
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Min 6 characters",
                                        },
                                    })}
                                    type={show ? "text" : "password"}
                                    placeholder="Password (min 6 chars)"
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
                            {errors.password && (
                                <p className="mt-2 ml-3 text-sm text-volt">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="relative flex items-center rounded-2xl border border-white/8 bg-[#1d1d1d] p-3 focus-within:border-volt">
                                <Lock size={18} className="text-txt/20" />
                                <input
                                    {...register("confirmPassword", {
                                        validate: (val) =>
                                            val === password ||
                                            "Password do not match",
                                    })}
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full border-0 bg-transparent pl-4 text-white placeholder:text-txt/20 focus:border-0 focus:ring-0 focus:outline-none"
                                />
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-2 ml-3 text-sm text-volt">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-volt py-3.5 font-heading font-bold text-ink hover:bg-volt-light"
                        >
                            Create account <ArrowRight size={18} />
                        </button>
                    </form>
                    <p className="mt-6 text-center font-body text-sm text-white/30">
                        Already have an account?{" "}
                        <NavLink
                            className="font-semibold text-volt transition-colors hover:text-volt-light"
                            to={"/login"}
                        >
                            Sign in
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
