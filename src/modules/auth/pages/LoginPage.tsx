import AuthCard from "../../shared/auth-register/components/AuthCard";
import AuthLayout from "../../shared/auth-register/components/AuthLayout";
import LoginForm from "../../../modules/auth/components/login/LoginForm";


export default function LoginPage() {
    return (
        <AuthLayout>
            <AuthCard>
                <LoginForm />
            </AuthCard>
        </AuthLayout>
    );
}