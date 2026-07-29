import type { ReactNode } from "react";

interface FormFieldProps {
    label: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
    error?: string;
}

export default function FormField({
    label,
    required = false,
    className = "",
    children,
    error
}: FormFieldProps) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label className="text-sm font-medium text-stone-700">
                {label}

                {required && (
                    <span className="ml-1 text-red-500">*</span>
                )}
            </label>

            {children}

            {error && (
                <span className="text-sm text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
}