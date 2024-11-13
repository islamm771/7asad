import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { userLogin } from '../../app/features/LoginSlice';
import { useAppDispatch, useAppSelector } from '../../app/store';
import Button from '../../components/ui/Button';


interface IFormInput {
    phone: string
    password: string
}



const Login = () => {
    const dispatch = useAppDispatch();
    const { isLoading, error } = useAppSelector(state => state.login)
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
        dispatch(userLogin(formData))
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
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
                                    // minLength: { value: 11, message: "رقم الهاتف غير صالح" },
                                    // maxLength: { value: 11, message: "رقم الهاتف غير صالح" }
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

                    {error && (
                        <p className='text-sm text-red-500 text-center font-semibold mb-2'>
                            {error}
                        </p>
                    )}

                    <div className="mb-10 text-left">
                        <a href="/forgot-password" className="text-zinc-500 text-lg  underline ml-20 ">
                            نسيت كلمة المرور؟
                        </a>
                    </div>

                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? '... جاري تسجيل دخول' : 'تسجيل دخول'}
                        </Button>
                    </div>
                    <div className="flex items-center justify-center mt-6 ">
                        <Link to="/auth/register" className="text-teal-700 ml-2 mr-2 font-bold inline-block border-b-2 border-teal-700"> إنشاء حساب</Link>
                        <p className="text-black  ">ليس لديك حساب؟  </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login