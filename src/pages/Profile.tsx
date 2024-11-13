import { FaCircle, FaGraduationCap, FaPhone, FaUser } from "react-icons/fa";
import { getUserData } from "../data"
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const user = getUserData();
    const handleEditProfile = () => {
        navigate("/auth/profile-complete")
    }
    return (
        <div className="container pt-28 pb-16">
            <div className="w-full lg:max-w-[1000px] mx-auto py-11 bg-white rounded-xl shadow border-2 border-teal-700 relative">
                <div className="absolute right-10 -top-20">
                    <img
                        className="w-40 h-40 rounded-full border-4 border-teal-700"
                        src={user.photo ? user.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0QxSZCjz-8JefhrJrJwtL5i7utqDsRhv7Q&s"}
                        alt="Profile"
                    />
                </div>
                {/* Name */}
                <div className="text-right flex justify-end items-center mr-6 mt-12 lg:mt-0 lg:mr-64">
                    <h1 className="text-teal-950 text-2xl font-medium mb-2">
                        {user.name}
                    </h1>
                    <FaUser
                        className="text-amber-500 text-xl ml-3 mb-3"
                    />
                </div>
                <div className="text-right flex justify-end items-center mt-2">
                    <h2 className="text-zinc-500 text-xl font-bold">{user.role}</h2>
                    <FaCircle
                        className="text-green-400 text-[10px] mr-6 ml-4"
                    />
                </div>

                {/* Remaining details */}

                <div className="text-right flex justify-end items-center mt-6 lg:mt-12">
                    <h4 className="text-teal-700 text-2xl font-medium inline">
                        {user.phone}
                    </h4>
                    <FaPhone
                        className="text-yellow-400 text-2xl mr-6 ml-4"
                    />
                </div>
                <div className="flex justify-end items-center mt-6">
                    <h4 className="text-teal-700 text-right text-xl lg:text-2xl font-medium">
                        {user.country ? user.country : "لا يوجد مدينة"}
                    </h4>
                    <FaLocationDot
                        className="text-yellow-400 text-2xl mr-6 ml-4"
                    />
                </div>
                <div className="flex justify-end items-center mt-6">
                    <h4 className="text-teal-700 text-right text-xl lg:text-2xl font-medium">
                        {user.Educationaldegree ? user.Educationaldegree : "لا يوجد مدينة"}
                    </h4>
                    <FaGraduationCap
                        className="text-yellow-400 text-2xl mr-6 ml-4"
                    />
                </div>
            </div>
            <div className="w-full lg:max-w-[1000px] mx-auto mt-6">
                <button className="bg-teal-700 text-white rounded-full font-bold px-16 py-1 text-lg" onClick={handleEditProfile}>
                    تعديل
                </button>
            </div>
        </div>
    )
}

export default Profile