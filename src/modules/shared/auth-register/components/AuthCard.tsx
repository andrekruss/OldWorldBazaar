interface AuthCardProps {
    children: React.ReactNode;
    maxWidth?: string;
    className?: string;
}

export default function AuthCard({
    children,
    maxWidth = "max-w-md",
    className = "",
}: AuthCardProps) {
    return (
        <div
            className={`w-full ${maxWidth} rounded-3xl bg-white p-8 shadow-xl ${className}`}
        >
            {children}
        </div>
    );
}