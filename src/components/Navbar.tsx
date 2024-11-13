import axios from "axios";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaBarcode, FaBell, FaSearch, FaShoppingCart, FaStore, FaUser } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/axios.config";
import { IProduct } from "../interface";
import CookieService from "../services/CookieService";
import { getUserData } from "../data";

const Navbar = () => {
    const userData = getUserData()
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState<IProduct[]>([])

    const handleSearchIconClick = () => {
        setSearchVisible(true);
    };

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearchClose = () => {
        setSearchVisible(false);
        setSearchValue("");
    };

    const handleSearch = async () => {
        try {
            const { data } = await axios.get(`https://sevenasad.onrender.com/product/search?search=${searchValue}`)
            setSearchResults(data.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async () => {
        try {
            const { status } = await axiosInstance.get("/auth/logout")
            if (status === 200) {
                // Remove localStorage item
                localStorage.removeItem("user-info");

                // Remove cookie
                CookieService.remove("jwt")

                // Show success message
                toast.success("تم تسجيل الخروج بنجاح", {
                    duration: 2000,
                    position: 'top-right',
                });
                // Reload page after 1.2 seconds
                setTimeout(() => {
                    location.reload();
                }, 1200);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <header className="bg-teal-700 rounded-b-3xl py-5 border-b-4 border-gray-300 relative">
            <div className="container flex justify-center items-center flex-wrap gap-6">
                <nav className="nav-links flex-grow flex items-center flex-wrap-reverse gap-6">
                    <ul className={`grid ${pathname == "/cart" ? "grid-cols-5" : "grid-cols-4"} gap-4`}>
                        {/* Start Navbar Links */}
                        {pathname !== "/scan" && (
                            <li>
                                <Link to="/scan" className="text-center text-white flex flex-col gap-2 items-center lg:text-[15px]">
                                    <FaBarcode />
                                    الماسح الضوئي
                                </Link>
                            </li>
                        )}
                        {pathname !== "/favourites" && (
                            <li>
                                <Link to="/favourites" className="text-center text-white flex flex-col gap-2 items-center lg:text-[15px]">
                                    <MdOutlineFavorite />
                                    المفضله
                                </Link>
                            </li>
                        )}
                        {pathname !== "/notifications" && (
                            <li>
                                <Link to="/notifications" className="text-center text-white flex flex-col gap-2 items-center lg:text-[15px]">
                                    <FaBell />
                                    الاشعارات
                                </Link>
                            </li>
                        )}
                        {pathname !== "/profile" && (
                            <li>
                                <Link to="/profile" className="text-center text-white flex flex-col gap-2 items-center lg:text-[15px]">
                                    <FaUser />
                                    الملف الشخصي
                                </Link>
                            </li>
                        )}
                        {pathname !== "/" && (
                            <li>
                                <Link to="/" className="text-center text-white flex flex-col gap-2 items-center lg:text-[15px]">
                                    <FaStore />
                                    السوق
                                </Link>
                            </li>
                        )}
                        {/* End Navbar Links */}
                    </ul>

                    {pathname === "/" && (
                        <h3 className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaStore className="" />
                            <Link to="/" className="">
                                السوق
                            </Link>
                        </h3>
                    )}
                    {pathname === "/profile" && (
                        <h3 className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaUser className="" />
                            <Link to="/profile">
                                الملف الشخصي
                            </Link>
                        </h3>
                    )}
                    {pathname === "/scan" && (
                        <h3 className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaBarcode className="" />
                            <Link to="/scan" className="text-[14px] md:text-[20px]">
                                الماسح الضوئي
                            </Link>
                        </h3>
                    )}
                    {pathname === "/favourites" && (
                        <h3 className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <MdOutlineFavorite className="" />
                            <Link to="/favourites" className="text-[20px]">
                                المفضله
                            </Link>
                        </h3>
                    )}
                    {pathname === "/cart" && (
                        <h3 className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaShoppingCart />

                            <Link to="/favourites" className="text-[20px]">
                                السلة
                            </Link>
                        </h3>
                    )}
                    {pathname === "/notifications" && (
                        <h3 className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaBell className="" />
                            <Link to="/notifications" className="text-[20px]">
                                الاشعارات
                            </Link>
                        </h3>
                    )}
                </nav>
                <div className="flex items-center gap-8">
                    {userData ? (
                        <button className="text-white text-[14px]" onClick={handleLogout}>
                            تسجيل خروج
                        </button>
                    ) : (
                        <div className="space-x-reverse space-x-2">
                            <Link to="/auth/login" className="text-white text-[14px]">
                                تسجيل دخول
                            </Link>
                            <span className="text-[#fff]">/</span>
                            <Link to="/auth/register" className="text-white text-[14px]">
                                انشاء حساب
                            </Link>
                        </div>
                    )}
                    <FaSearch
                        className="text-white md:text-xl cursor-pointer"
                        onClick={handleSearchIconClick}
                    />
                    {searchVisible && (
                        <div className="w-11/12 md:w-96 bg-white mt-1 rounded-bl-3xl border-2 border-teal-700 absolute top-full right-1/2 translate-x-1/2 md:translate-x-0 md:right-2 z-10">
                            <div className="flex items-center border-b border-teal-700 p-2">
                                <button
                                    className="text-teal-600"
                                    onClick={handleSearch}
                                >
                                    <FaSearch />
                                </button>
                                <input
                                    type="text"
                                    className="w-full py-2 px-4 focus:outline-none"
                                    value={searchValue}
                                    onChange={handleSearchInputChange}
                                    placeholder="Search..."
                                />
                                <button
                                    className="bg-teal-600 text-white py-1 px-3 rounded-md transition-colors hover:bg-red-700"
                                    onClick={handleSearchClose}
                                >
                                    Close
                                </button>
                            </div>
                            <div className="result-products h-72 md:h-96">
                                {searchResults.map((result) => (
                                    <div className="flex items-start flex-row-reverse p-2 gap-4">
                                        <img
                                            src={result.photo[0]}
                                            alt={result.name}
                                            className="w-[100px] h-[100px] object-cover rounded-lg cursor-pointer"
                                            onClick={() => navigate(`/product/${result._id}`)}
                                        />
                                        <div className="flex-1">
                                            <Link to={`/product/${result._id}`} className="text-[18px] text-right font-semibold text-teal-900">{result.name}</Link>
                                            <p className="text-teal-600 text-right font-medium">{result.categoryName}</p>
                                            <p className="text-teal-600 text-right font-medium">طن/جم: {result.price}</p>
                                        </div>
                                        <button className="py-2 px-4 text-white bg-teal-700 rounded-md mt-5"
                                            onClick={() => navigate(`/product/${result._id}`)}>
                                            اشتري الان
                                        </button>

                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
