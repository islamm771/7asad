import { BiChevronLeft } from "react-icons/bi";
import { RiDiscountPercentFill, RiEditBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="header w-full h-[70px] bg-teal-700 rounded-b-[30px] ">
            <div className="container h-full flex items-center justify-between xl:px-24">
                <a href="#" className="text-white text-xl flex items-center" onClick={(e) => { e.preventDefault(); navigate(-1) }}>
                    <BiChevronLeft size={40} className="text-white" />
                    <span className="-ml-2">العودة</span>
                </a>
                {location.pathname.includes("special-offers") && (
                    <p className="text-white text-xl flex flex-row-reverse items-center gap-1">
                        <RiDiscountPercentFill />
                        العروض الخاصة
                    </p>
                )}
                {location.pathname.includes("add-product") && (
                    <p className="text-white text-xl flex flex-row-reverse items-center gap-1">
                        <RiEditBoxLine />
                        اضافة منتج
                    </p>
                )}
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
    )
}

export default Header