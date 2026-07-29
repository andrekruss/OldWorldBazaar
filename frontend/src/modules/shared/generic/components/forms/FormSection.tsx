import type { ReactNode } from "react";

interface FormSectionProps {
    title: string;
    children: ReactNode;
    columns?: 1 | 2;
}

export default function FormSection({
    title,
    children,
    columns = 2
}: FormSectionProps) {
    return (
        <section className="space-y-5">
            <h2 className="border-b border-stone-200 pb-2 text-lg font-semibold text-stone-900">
                {title}
            </h2>

            <div
                className={
                    columns === 1
                        ? "grid gap-4"
                        : "grid gap-4 md:grid-cols-2"
                }
            >
                {children}
            </div>
        </section>
    );
}