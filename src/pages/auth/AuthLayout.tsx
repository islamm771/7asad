import { BiChevronLeft } from "react-icons/bi";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col min-h-screen bg-neutral-100">
            <div className="header w-full h-[70px] bg-teal-700 rounded-b-[30px] ">
                <div className="container h-full flex items-center justify-between">
                    <a href="#" className="text-white text-xl flex items-center" onClick={(e) => { e.preventDefault(); navigate(-1) }}>
                        <BiChevronLeft size={40} className="text-white" />
                        <span className="-ml-2">العودة</span>
                    </a>
                    {location.pathname.includes("/login") && (
                        <p className="text-white text-xl">تسجيل الدخول</p>
                    )}
                    {location.pathname.includes("/register") && (
                        <p className="text-white text-xl">انشاء حساب</p>
                    )}
                    {location.pathname.includes("/profile-complete") && (
                        <p className="text-white text-xl">اكمال بيانات</p>
                    )}
                </div>
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout