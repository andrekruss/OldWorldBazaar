import type { ReactNode } from "react";

interface FormFieldProps {
    label: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
}

export default function FormField({
    label,
    required = false,
    className = "",
    children
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
        </div>
    );
}