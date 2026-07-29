import AuthCard from "../../shared/auth-register/components/AuthCard";
import AuthLayout from "../../shared/auth-register/components/AuthLayout";
import RegisterCustomerForm from "../components/forms/RegisterCustomerForm";


export default function RegisterCustomerPage(){
    return (
        <AuthLayout>
            <AuthCard maxWidth="max-w-2xl">
                <RegisterCustomerForm />
            </AuthCard>
        </AuthLayout>
    );
}