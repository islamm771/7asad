import { Outlet } from "react-router-dom";
import Header from "../../components/auth/Header";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-neutral-100">
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout