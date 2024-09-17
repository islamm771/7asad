import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiChevronLeft } from 'react-icons/bi';
import { FaLock } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config/axios.config';
import { AxiosError } from 'axios';
import { IError } from '../../interface';


interface IFormInput {
    phone: string
    password: string
}



const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
        setIsLoading(true)
        setError("")
        try {
            const { data } = await axiosInstance.post("/auth/login", formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            // Extract the user data from the response
            const { user } = data.data;
            console.log(user);
            localStorage.setItem('user-info', JSON.stringify(user));
            setTimeout(() => {
                navigate('/');
            }, 1000)
            // if (location.state && location.state == "/from") {
            //     navigate('/profilecomplete', { state: { id: user["_id"] } });
            // } else {
            //     navigate('/');
            // }

        } catch (error) {
            const errorObj = error as AxiosError<IError>
            console.log(errorObj.response?.data.message)
            setError(errorObj.response?.data.message)
        } finally {
            setIsLoading(false)
        }
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="flex flex-col h-screen bg-neutral-100">
            <div className='flex flex-col'>
                <div className="header w-full h-[70px] bg-teal-700 rounded-bl-[30px] rounded-br-[30px] relative flex items-center justify-between">
                    <a href="#" className="text-white text-xl flex items-center ml-10" onClick={(e) => { e.preventDefault(); navigate(-1) }}>
                        <BiChevronLeft className="text-white text-2xl mr-2" />
                        <span className="">العودة</span>
                    </a>
                </div>
            </div>

            <div className="container">
                <div className="flex-grow flex items-center justify-center ">
                    <div className="w-full md:w-[480px] h-auto bg-white shadow rounded-[30px] border border-teal-700 px-8 py-12 mt-20 mb-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className='text-teal-950 text-2xl font-bold mb-8 text-center'> تسجيل دخول للحساب</h1>

                            <div className="mb-7 text-right w-full md:w-[340px] md:ml-auto">
                                <div className="flex justify-end items-center">
                                    <label htmlFor="phone" className="block text-teal-950 text-lg font-bold mb-3 mr-2">رقم الهاتف</label>
                                    <div className="flex items-center">
                                        <FaPhoneFlip className="text-teal-700 mb-3 mr-1" />
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right "
                                    placeholder="رقم الهاتف"
                                    {...register("phone",
                                        {
                                            required: "برجاء ادخال رقم الهاتف",
                                            minLength: { value: 11, message: "رقم الهاتف غير صالح" },
                                            maxLength: { value: 11, message: "رقم الهاتف غير صالح" }
                                        })}
                                />
                                <p className='text-sm text-red-500'>{errors.phone?.message}</p>
                            </div>
                            <div className="mb-7 text-right w-full md:w-[340px] md:ml-auto">
                                <div className="flex justify-end items-center">
                                    <label htmlFor="password" className="block text-teal-950 text-lg font-bold mb-3 mr-2"> كلمه المرور</label>
                                    <div className="flex items-center">
                                        <FaLock className="text-teal-700 mb-3 mr-1" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right"
                                        placeholder="كلمه المرور"
                                        {...register("password", {
                                            required: "برجاء ادخال رقم السري",
                                        })}
                                    />
                                    <div className='absolute bottom-[10px] left-[20px]'>
                                        {showPassword ? (
                                            <IoEyeOffSharp className="text-xl text-stone-400 cursor-pointer " onClick={togglePasswordVisibility} />
                                        ) : (
                                            <IoEyeSharp className="text-xl text-stone-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        )}
                                    </div>
                                </div>
                                <p className='text-sm text-red-500'>{errors.password?.message}</p>
                            </div>

                            {error && <p className='text-sm text-red-500 text-center mb-2'>
                                {error}
                            </p>}

                            <div className="mb-10 text-left">
                                <a href="/forgot-password" className="text-zinc-500 text-lg  underline ml-20 ">
                                    نسيت كلمة المرور؟
                                </a>
                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    className="px-16 py-2 bg-teal-700 text-white rounded-full font-bold text-lg cursor-pointer"
                                    type="submit"
                                >
                                    {isLoading ? '... جاري تسجيل دخول' : 'تسجيل دخول'}
                                </button>
                            </div>
                            <div className="flex items-center justify-center mt-6 ">
                                <Link to="/register" className="text-teal-700 ml-2 mr-2 font-bold inline-block border-b-2 border-teal-700"> إنشاء حساب</Link>
                                <p className="text-black  ">لديك حساب؟  </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login