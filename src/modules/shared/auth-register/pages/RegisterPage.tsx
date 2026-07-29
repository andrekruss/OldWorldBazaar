import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import AuthLayout from "../components/AuthLayout";
import RegistrationOptionCard from "../components/RegistrationOptionCard";

export default function Register() {
    return (
        <AuthLayout>
            <AuthCard>
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl shadow-sm">
                        🏺
                    </div>

                    <h1 className="mt-5 text-2xl font-bold text-stone-900">
                        Join Old World Bazaar
                    </h1>

                    <p className="mt-2 max-w-sm text-sm text-stone-600">
                        Choose how you'd like to begin your journey.
                    </p>
                </div>

                <div className="mt-8 grid gap-4">
                    <RegistrationOptionCard
                        to="/register/customer"
                        icon="🛒"
                        title="Shop for Antiques"
                        description="Discover unique antiques from trusted sellers."
                    />
                    <RegistrationOptionCard
                        to="/register/seller"
                        icon="🏪"
                        title="Open a Store"
                        description="Start selling antiques and collectibles."
                    />
                </div>

                <div className="mt-8 border-t border-stone-200 pt-6 text-center text-sm text-stone-600">
                    Already have an account?{" "}
                    <Link
                        to="/"
                        className="font-semibold text-amber-700 transition hover:text-amber-800 hover:underline"
                    >
                        Sign in
                    </Link>
                </div>
            </AuthCard>
        </AuthLayout>
    );
}