import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
    className = "",
    ...props
}: InputProps) {
    return (
        <input
            className={`
                w-full rounded-lg border border-stone-300
                px-3 py-2
                text-stone-900
                placeholder:text-stone-400
                transition
                focus:border-amber-700
                focus:outline-none
                focus:ring-2
                focus:ring-amber-200
                disabled:bg-stone-100
                disabled:text-stone-500
                ${className}
            `}
            {...props}
        />
    );
}