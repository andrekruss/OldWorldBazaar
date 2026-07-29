import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
    children,
    className = "",
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
                w-full rounded-lg
                bg-amber-800
                py-3
                font-semibold
                text-white
                transition
                hover:bg-amber-900
                disabled:cursor-not-allowed
                disabled:bg-stone-400
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}