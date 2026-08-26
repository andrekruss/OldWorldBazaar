import AuthCard from "../../shared/auth-register/components/AuthCard";
import AuthLayout from "../../shared/auth-register/components/AuthLayout";
import RegisterSellerForm from "../components/forms/RegisterSellerForm";

export default function RegisterSellerPage(){
    return (
        <AuthLayout>
            <AuthCard maxWidth="max-w-2xl">
                <RegisterSellerForm />
            </AuthCard>
        </AuthLayout>
    )
}