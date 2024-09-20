import { Link } from "react-router-dom";
import { getAdminData } from "../../data";
import { FaAngleLeft } from "react-icons/fa";

const Header = () => {
    const admin = getAdminData();

    return (
        <header className="bg-white shadow-md border-gray-300 border-2 px-6 py-8 flex items-center justify-end mb-10">
            {location.pathname === "/admin/dashboard" && (
                <section className="flex items-center gap-5 pr-10">
                    <button className="bg-white text-teal-700 py-2 px-8 rounded-lg border-2 border-teal-700 text-md font-semibold font-Poppins">
                        Appointments
                    </button>
                    <Link to={"/"} className="bg-teal-700 text-white py-2 px-8 rounded-lg border-teal-700 text-md font-semibold font-Poppins">
                        Visit Website
                    </Link>
                </section>
            )}
            {location.pathname !== "/admin/dashboard" && (
                <section className="flex items-center gap-12 mr-auto">
                    <Link to="/admin/dashboard" className="text-white text-xl flex items-center" >
                        <FaAngleLeft className="text-teal-700 text-3xl mr-2" />
                        <span className="text-teal-700 text-xl font-semibold ">Go Back</span>
                    </Link>
                    <h2 className='text-teal-950 text-2xl font-medium font-poppins'>
                        {location.pathname === "/users" && ("Users")}
                        {location.pathname === "/sellers" && ("Sellers")}
                        {location.pathname === "/specialists" && ("Specialists")}
                        {location.pathname === "/products" && ("Products")}
                        {location.pathname === "/buying-orders" && ("Buying Orders")}
                        {location.pathname === "/selling-orders" && ("Sellings Orders")}
                    </h2>
                </section>
            )}
            <section className="flex items-center">
                <img
                    className="w-10 h-10 rounded-full mr-2"
                    src={admin?.photo}
                    alt="Profile Picture"
                />
                <h4 className="text-black text-md font-bold font-Poppins">{admin?.name}</h4>
            </section>
        </header>
    )
}

export default Header