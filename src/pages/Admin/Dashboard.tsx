import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Header from "../../components/admin/Header";

const AdminDashBoard = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-7 min-h-screen">

            {/* Left Sidebar (Full Height) */}
            <div className="bg-teal-700 text-white px-6 py-4 col-span-1 md:h-full flex flex-col justify-end">
                {/* Add your sidebar content here */}
                <button className="flex items-center justify-center gap-2 mb-6">
                    <TbLogout2 />
                    <h2 className="text-xl font-medium font-poppins">LogOut</h2>
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col col-span-6 bg-neutral-50 ">
                {/* Header */}
                <Header />

                {/* Content */}
                <h3 className="p-4 text-teal-700 text-3xl font-bold font-Poppins">Dashboard</h3>
                <main className="px-4 md:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
                    <Link to="/users" className="card" >
                        <div className="bg-white relative rounded shadow-md border border-teal-700 px-8 py-10 hover:scale-105 transition-transform h-[150px] w-[250px]">
                            <h2 className="text-teal-900 text-2xl font-semibold">Users</h2>
                            <HiOutlineSquares2X2 className="text-4xl text-teal-700 absolute bottom-2 right-2" />
                        </div>
                    </Link>
                    <Link to="/sellers" className="card" >
                        <div className="bg-white relative rounded shadow-md border border-teal-700 px-8 py-10 hover:scale-105 transition-transform h-[150px] w-[250px]">
                            <h2 className="text-teal-900 text-2xl font-semibold">Sellers</h2>
                            <HiOutlineSquares2X2 className="text-4xl text-teal-700 absolute bottom-2 right-2" />
                        </div>
                    </Link>
                    <Link to="/specialists" className="card" >
                        <div className="bg-white relative rounded shadow-md border border-teal-700 px-8 py-10 hover:scale-105 transition-transform h-[150px] w-[250px]">
                            <h2 className="text-teal-900 text-2xl font-semibold">Specialists</h2>
                            <HiOutlineSquares2X2 className="text-4xl text-teal-700 absolute bottom-2 right-2" />
                        </div>
                    </Link>
                    <Link to="/buying-orders" className="card " >
                        <div className="bg-white relative rounded shadow-md border border-teal-700 px-8 py-10 hover:scale-105 transition-transform h-[150px] w-[250px]">
                            <h2 className="text-teal-900 text-2xl font-semibold">Buying Orders</h2>
                            <HiOutlineSquares2X2 className="text-4xl text-teal-700 absolute bottom-2 right-2" />
                        </div>
                    </Link>
                    <Link to="/selling-orders" className="card " >
                        <div className="bg-white relative rounded shadow-md border border-teal-700 px-8 py-10 hover:scale-105 transition-transform h-[150px] w-[250px]">
                            <h2 className="text-teal-900 text-2xl font-semibold">Selling Orders</h2>
                            <HiOutlineSquares2X2 className="text-4xl text-teal-700 absolute bottom-2 right-2" />
                        </div>
                    </Link>
                    <Link to="/products" className="card " >
                        <div className="bg-white relative rounded shadow-md border border-teal-700 px-8 py-10 hover:scale-105 transition-transform h-[150px] w-[250px]">
                            <h2 className="text-teal-900 text-2xl font-semibold">Products</h2>
                            <HiOutlineSquares2X2 className="text-4xl text-teal-700 absolute bottom-2 right-2" />
                        </div>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default AdminDashBoard;