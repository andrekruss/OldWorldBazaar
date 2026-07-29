import { Link } from "react-router-dom";

interface RegistrationOptionCardProps {
    to: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function RegistrationOptionCard(props: RegistrationOptionCardProps){

    return (
        <Link
            to={props.to}
            className="group rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
        >
            <div className="flex items-center gap-4">
                <div className="text-4xl transition-transform duration-200 group-hover:scale-110">
                    {props.icon}
                </div>

                <div>
                    <h2 className="font-semibold text-stone-900">
                        {props.title}
                    </h2>

                    <p className="mt-1 text-sm text-stone-600">
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}