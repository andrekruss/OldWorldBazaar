import type { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-stone-800 to-amber-900 px-4">
            {children}
        </div>
    );
}