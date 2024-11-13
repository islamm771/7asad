import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { IError } from "../../interface";
import { axiosInstance } from "../../config/axios.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";


interface IFormInput {
    phone: string,
    password: string
}


const AdminLogin = () => {
    const navigate = useNavigate();
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
            localStorage.setItem('admin-info', JSON.stringify(user));
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 1000)
        } catch (error) {
            const errorObj = error as AxiosError<IError>
            console.log(errorObj.response?.data.message)
            setError(errorObj.response?.data.message)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section className="h-screen flex justify-center items-center bg-teal-700">
            <div className="flex flex-row">
                <div className="pic flex items-center justify-center">
                    <img className="w-96 h-full" src="/images/adminlogin.jpeg" alt="Admin Login" />
                </div>
                <div className="bg-white w-96 p-6">
                    <h1 className="text-teal-950 text-4xl font-medium text-center leading-loose pb-10">Admin Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="pb-3">
                            <input type="text"
                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-teal-500 focus:ring-1"
                                placeholder="Enter your phone"
                                {...register("phone", {
                                    required: "Please enter your phone"
                                })}
                            />
                            {errors.phone && <p className="text-red-600 text-[12px] font-medium">{errors.phone.message}</p>}
                        </div>
                        <div className="pb-5">
                            <input type="password"
                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-teal-500 focus:ring-1"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Please enter your password"
                                })}
                            />
                            {errors.password && <p className="text-red-600 text-[12px] font-medium">{errors.password.message}</p>}
                        </div>
                        {error && <p className="text-red-600 text-sm font-medium text-center mb-3">{error}</p>}
                        <div className="flex justify-center pb-5">
                            <Button disabled={isLoading}>
                                {isLoading ? "Logging in ..." : "Login"}
                            </Button>
                        </div>
                        <a href="#" className="text-black text-center text-lg font-medium font-Poppins underline block">
                            Forget password?
                        </a>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin