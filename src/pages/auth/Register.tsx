import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { axiosInstance } from "../../config/axios.config";
import { IError } from "../../interface";
import toast from "react-hot-toast";


interface IFormInput {
    name: string,
    phone: string,
    email: string
    password: string,
    passwordConfirm: string,
}


const Register = () => {
    const [error, setError] = useState<string>();
    const [isloading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
        setIsLoading(true);

        if (formData.password !== formData.passwordConfirm) {
            setIsLoading(false);
            setError("كلمه المرور غير متطابقين")
            return
        }

        setError("")
        try {
            const { data } = await axiosInstance.post("/auth/register", formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            // Extract the user data from the response
            const { user } = data.data;
            console.log(user);
            localStorage.setItem('user-info', JSON.stringify(user));
            toast.success("تم انشاء حساب بنجاح", {
                duration: 2000,
                position: 'top-right',
            });
            setTimeout(() => {
                window.location.replace('/auth/profile-complete');
            }, 1500);
        } catch (error) {
            const errorObj = error as AxiosError<IError>
            console.log(errorObj.response?.data.message)
            setError(errorObj.response?.data.message)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex-grow flex h-auto items-center justify-center ">
            <div className="w-full md:w-[480px] h-auto bg-white shadow rounded-[30px] border border-teal-700 px-8 py-12 mt-8 mb-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-teal-950 text-2xl font-bold mb-8 text-center'>إنشاء حساب </h1>

                    {/* Name */}
                    <div className="mb-7 text-right w-full md:w-[340px] md:ml-auto">
                        <div className="flex justify-end items-center">
                            <label htmlFor="name" className="block text-teal-950 text-lg font-bold mb-3 mr-2">الأسم</label>
                            <div className="flex items-center">
                                <FaUser className="text-teal-700  mb-3 mr-1" />
                            </div>
                        </div>
                        <input type="text" id="name"
                            className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right"
                            {...register("name", { required: "برحاء ادخال الاسم" })} />
                        {errors.name && <p className="text-red-600 text-[14px] font-medium">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="mb-7 text-right w-full md:w-[340px] md:ml-auto">
                        <div className="flex justify-end items-center mb-3">
                            <label htmlFor="phone" className="block text-teal-950 text-lg font-bold ml-2 mr-2">رقم الهاتف</label>
                            <div className="flex items-center">
                                <FaPhoneFlip className="text-teal-700 mr-1" />
                            </div>

                        </div>
                        <div className="relative">
                            <input type="text" id="phone"
                                className="w-full py-2 px-2 !pe-[75px] focus:outline-none rounded-[10px] border border-teal-700 text-right"
                                {...register("phone", { required: "برحاء ادخال رقم الهاتف" })} />
                            <div className="absolute right-2 top-0 bottom-0 flex items-center">
                                <span className="absolute left-11 text-zinc-500 text-[13px] font-medium">+20</span>
                                <div className="h-full ml-2 mr-2 border-l border-teal-700"></div>
                                <img src="/images/icon-egypt.png" alt="Egypt Icon" className="h-6 w-6 mr-6" />
                            </div>
                        </div>
                        {errors.phone && <p className="text-red-600 text-[14px] font-medium">{errors.phone.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-7 text-right w-full md:w-[340px] md:ml-auto">
                        <div className="flex justify-end items-center">
                            <label htmlFor="email" className="block text-teal-950 text-lg font-bold mb-3 mr-2">البريد الإلكتروني</label>
                            <div className="flex items-center">
                                <MdEmail className="text-teal-700 text-xl mb-3 mr-1" />
                            </div>
                        </div>
                        <input type="email" id="email"
                            className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right"
                            {...register("email", { required: "برحاء ادخال البريد الإلكتروني" })} />
                        {errors.email && <p className="text-red-600 text-[14px] font-medium">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-7 text-right w-full md:w-[340px] md:ml-auto">
                        <div className="flex justify-end items-center">
                            <label htmlFor="password" className="block text-teal-950 text-lg font-bold mb-3 mr-2">إنشاء كلمه المرور</label>
                            <div className="flex items-center">
                                <FaLock className="text-teal-700 mb-3 mr-1" />
                            </div>
                        </div>
                        <input type="password" id="password"
                            className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right"
                            {...register("password", { required: "برحاء ادخال كلمه المرور" })} />
                        {errors.password && <p className="text-red-600 text-[14px] font-medium">{errors.password.message}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-7 text-right w-full md:w-[340px] md:ml-auto">
                        <div className="flex justify-end items-center">
                            <label htmlFor="passwordConfirm" className="block text-teal-950 text-lg font-bold mb-3 mr-2">تأكيد كلمه المرور</label>
                            <div className="flex items-center">
                                <FaLock className="text-teal-700 mb-3 mr-1" />
                            </div>
                        </div>
                        <input type="password" id="passwordConfirm"
                            className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right"
                            {...register("passwordConfirm", { required: "برحاء ادخال تاكيد كلمه المرور" })} />
                        {errors.passwordConfirm && <p className="text-red-600 text-[14px] font-medium">{errors.passwordConfirm.message}</p>}
                    </div>

                    {error && <p className='text-sm text-red-500 text-center font-semibold mb-2'>
                        {error}
                    </p>}

                    {/* Submit Button */}
                    <div className="flex items-center justify-center">
                        <Button type="submit" disabled={isloading}>
                            {isloading ? '... جاري انشاء حساب' : 'انشاء حساب'}
                        </Button>
                    </div>

                    {/* Login Link */}
                    <div className="flex items-center justify-center mt-4">
                        <Link to="/auth/login" className="text-teal-700 ml-2 mr-2 font-bold inline-block border-b-2 border-teal-700">
                            تسجيل دخول
                        </Link>
                        <p className="text-black">لديك حساب بالفعل؟</p>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Register