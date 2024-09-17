import { BiChevronLeft } from "react-icons/bi"
import { GrCart } from "react-icons/gr"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-white py-4 sticky top-0 z-20">
            <div className="container flex items-center justify-between">
                <a href="#" className="text-teal-950 text-[19px] font-medium flex items-center" onClick={() => navigate(-1)}>
                    <BiChevronLeft size={40} className="text-teal-700" />
                    <span className="-ml-2">العودة</span>
                </a>

                <div onClick={() => navigate('/cart')} className="text-right flex items-center cursor-pointer p-1">
                    <GrCart className="text-teal-700 text-2xl md:text-3xl" />
                </div>
            </div>
        </nav>
    )
}

export default Header