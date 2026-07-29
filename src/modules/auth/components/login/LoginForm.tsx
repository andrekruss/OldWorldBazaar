import { Link } from "react-router-dom";
import Button from "../../../shared/generic/components/buttons/Button";

export default function LoginForm(){
    return (
        <>
            {/* Logo / Ícone */}
            <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    🏺
                </div>

                <h1 className="mt-6 text-3xl font-bold text-stone-900">
                    Welcome Back!
                </h1>

                <p className="mt-2 text-center text-sm text-stone-500">
                    Sign in to continue exploring timeless treasures.
                </p>
            </div>

            {/* Formulário */}
            <form className="mt-10 space-y-6">

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-stone-800"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email..."
                        className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition"
                    />
                </div>

                {/* Senha */}
                <div>

                    <div className="mb-2 flex justify-between items-center">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-stone-800"
                        >
                            Password
                        </label>

                        <a
                            href="#"
                            className="text-sm text-amber-700 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition"
                    />

                </div>

                {/* Botão */}
                <Button type="submit">
                    Sign In
                </Button>

            </form>

            {/* Rodapé */}
            <div className="mt-8 border-t border-stone-200 pt-6 text-center text-sm text-stone-600">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="font-semibold text-amber-700 hover:underline"
                >
                    Sign up
                </Link>
            </div>
        </>
    );
}