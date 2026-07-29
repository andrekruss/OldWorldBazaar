import { Routes, Route } from "react-router-dom";
import HomePage from "../modules/shared/generic/pages/HomePage";
import RegisterPage from "../modules/shared/auth-register/pages/RegisterPage";
import RegisterCustomerPage from "../modules/customers/pages/RegisterCustomerPage";
import LoginPage from "../modules/auth/pages/LoginPage";

export default function(){
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/register/customer" element={<RegisterCustomerPage />}></Route>
        </Routes>
    );
}