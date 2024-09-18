import axios from "axios";
import { ChangeEvent, useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../data";
import { FaBarcode, FaBell, FaSearch, FaStore, FaUser } from "react-icons/fa";
import { IProduct } from "../interface";

const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState<IProduct[]>([])

    const userData = getUserData()
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
            console.log(data.data.products)
            setSearchResults(data.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () => {
        axios
            .get("https://sevenasad.onrender.com/auth/logout")
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem("user-info");
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <header className="flex justify-center md:justify-between items-center flex-wrap gap-6 md:gap-4 bg-teal-700 rounded-b-3xl p-4 border-b-4 border-gray-300 relative">
            <nav className="nav-links flex-grow ">
                <ul className="flex items-center flex-wrap-reverse lg:flex-nowrap justify-center gap-5 lg:gap-8 list-none m-0 p-0 md:ml-[3rem]">
                    {/* Start Navbar Links */}
                    {pathname !== "/" && (
                        <li>
                            <Link to="/" className="text-white flex flex-col gap-2 items-center text-[15px]">
                                <FaStore />
                                السوق
                            </Link>
                        </li>
                    )}
                    {pathname !== "/scan" && (
                        <li>
                            <Link to="/scan" className="text-white flex flex-col gap-2 items-center text-[15px]">
                                <FaBarcode />
                                الماسح الضوئي
                            </Link>
                        </li>
                    )}
                    {pathname !== "/favourites" && (
                        <li>
                            <Link to="/favourites" className="text-white flex flex-col gap-2 items-center text-[15px]">
                                <MdOutlineFavorite />
                                المفضله
                            </Link>
                        </li>
                    )}
                    {pathname !== "/notifications" && (
                        <li>
                            <Link to="/notifications" className="text-white flex flex-col gap-2 items-center text-[15px]">
                                <FaBell />
                                الاشعارات
                            </Link>
                        </li>
                    )}
                    {pathname !== "/profile" && (
                        <li>
                            <Link to="/profile" className="text-white flex flex-col gap-2 items-center text-[15px]">
                                <FaUser />
                                الملف الشخصي
                            </Link>
                        </li>
                    )}
                    {/* End Navbar Links */}

                    {pathname === "/" && (
                        <li className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaStore className="" />
                            <Link to="/" className="">
                                السوق
                            </Link>
                        </li>
                    )}
                    {pathname === "/profile" && (
                        <li className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaUser className="" />
                            <Link to="/profile">
                                الملف الشخصي
                            </Link>
                        </li>
                    )}
                    {pathname === "/scan" && (
                        <li className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaBarcode className="" />
                            <Link to="/scan" className="text-[14px] md:text-[20px]">
                                الماسح الضوئي
                            </Link>
                        </li>
                    )}
                    {pathname === "/favourites" && (
                        <li className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <MdOutlineFavorite className="" />
                            <Link to="/favourites" className="text-[20px]">
                                المفضله
                            </Link>
                        </li>
                    )}
                    {pathname === "/notifications" && (
                        <li className="text-white text-center flex flex-row-reverse flex-1 items-center justify-center min-[460px]:justify-start lg:justify-center gap-2 md:text-[20px]">
                            <FaBell className="" />
                            <Link to="/notifications" className="text-[20px]">
                                الاشعارات
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
            <div className="text-center sm:text-right flex items-center gap-[10px] md:ml-[3rem] lg:ml-0">
                {userData ? (
                    <button className="text-white text-[14px] mr-16 sm:mr-12" onClick={handleLogout}>
                        تسجيل خروج
                    </button>
                ) : (
                    <>
                        <Link to="/auth/register" className="text-white text-[14px]">
                            انشاء حساب
                        </Link>
                        <span className="text-[#fff]">/</span>
                        <Link to="/auth/login" className="text-white text-[14px]">
                            تسجيل دخول
                        </Link>
                    </>
                )}
                <FaSearch
                    className="text-white md:text-xl ml-[10px] mr-8 md:mr-4 cursor-pointer"
                    onClick={handleSearchIconClick}
                />
                {searchVisible && (
                    <div className="w-11/12 md:w-96 bg-white mt-1 rounded-bl-3xl border-2 border-teal-700 absolute top-full right-1/2 translate-x-1/2 md:translate-x-0 md:right-2 z-10">
                        <div className="flex items-center border-b border-teal-700 p-2">
                            <button
                                className=""
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
                                className=""
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
        </header >
    );
};

export default Navbar;
