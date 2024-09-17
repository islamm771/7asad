import { ChangeEvent, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { IUser } from "../../interface"
import { SubmitHandler, useForm } from "react-hook-form"
import { FaCircleExclamation } from "react-icons/fa6"
import { FaCloudUploadAlt } from "react-icons/fa"

interface IFormInput {
    name: string
    country: string
    phone: string
    job: string,
    Educationaldegree: string
}



const ProfileComplete = () => {
    const { state } = useLocation()
    const [selectedImage, setSelectedImage] = useState<File>();
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(file);
                setIsImageUploaded(true);
            };
            reader.readAsDataURL(file);
        }
    };


    const onSubmit: SubmitHandler<IFormInput> = (formData) => {
        console.log(formData)
    }
    const [user, setUser] = useState<IUser>({
        name: "",
        email: "",
        phone: "",
        password: "",
        _id: "",
        __v: 0,
        date: "",
        experince: [],
        role: "",
        userRating: 0,
    })

    useEffect(() => {
        setUser(state?.user)

    }, []);

    if (user) {
        return (
            <>
                <div className="flex justify-between flex-wrap-reverse mt-16 mb-10">
                    <div className="w-full md:w-[50%]">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row relative flex flex-col mb-6">
                                <label
                                    htmlFor="name"
                                    className={`text-right text-xl font-medium ${errors.name?.message ? "text-red-500" : "text-teal-700"}`}
                                >
                                    الأسم
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    // value={user.name}
                                    className={`border-b p-2 pl-9 w-full focus:outline-none text-right bg-transparent ${errors.name?.message ? "border-red-500" : "border-teal-700"}`}
                                    placeholder={
                                        !errors.name?.message
                                            ? "ادخل الاسم"
                                            : "يجب إدخال بيانات لهذا الحقل , برجاء ملئ البيانات بشكل صحيح"
                                    }
                                    {...register("name", { required: "برجاء ادخال البانات لهذا الحقل" })}
                                />
                                <FaCircleExclamation
                                    size={20}
                                    className={`text-neutral-500 absolute left-2 top-1/2 -translate-y-1/2 ${errors.name?.message ? "text-red-500" : ""}`}
                                />
                            </div>

                            <div className="form-row relative flex flex-col mb-6">
                                <label
                                    htmlFor="job"
                                    className={`text-right text-xl font-medium ${errors.job?.message ? "text-red-500" : "text-teal-700"
                                        }`}
                                >
                                    الوظيفة
                                </label>
                                <input
                                    type="text"
                                    id="job"
                                    placeholder={
                                        !errors.job?.message
                                            ? "ادخل الوطيفة"
                                            : "يجب إدخال بيانات لهذا الحقل , برجاء ملئ البيانات بشكل صحيح"
                                    }
                                    className={`border-b p-2 pl-9 w-full bg-transparent focus:outline-none text-right ${errors.job?.message ? "border-red-500" : "border-teal-700"}`}
                                    {...register("job", { required: "برجاء ادخال البانات لهذا الحقل" })}
                                />
                                <FaCircleExclamation
                                    size={20}
                                    className={`text-neutral-500 absolute left-2 top-1/2 -translate-y-1/2 ${errors.job?.message ? "text-red-500" : ""}`}
                                />
                            </div>

                            <div className="form-row relative flex flex-col mb-6">
                                <label
                                    htmlFor="country"
                                    className="text-right text-teal-700 font-medium text-xl"
                                >
                                    العنوان
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    placeholder="المدينة / محل الإقامة (الشارع , رقم المبني)"
                                    className="w-full border-b p-2 border-teal-700 bg-transparent focus:outline-none text-right"
                                />
                            </div>

                            <div className="form-row relative flex flex-col mb-6">
                                <label htmlFor="phone"
                                    className={`text-right text-xl font-medium ${errors.phone?.message ? "text-red-500" : "text-teal-700"}`}>
                                    رقم الهاتف
                                </label>
                                <div className="relative flex items-center w-full">
                                    <input
                                        type="text"
                                        id="phone"
                                        className={`border-b w-full p-2 pl-9 bg-transparent focus:outline-none flex-grow text-right pr-[70px] ${errors.phone?.message ? "border-red-500" : "border-teal-700"
                                            }`}
                                        placeholder={
                                            !errors.phone?.message
                                                ? ""
                                                : "يجب إدخال بيانات لهذا الحقل , برجاء ملئ البيانات بشكل صحيح"
                                        }
                                        {...register("phone", { required: "برجاء ادخال البانات لهذا الحقل" })}
                                    />

                                    <div className="absolute right-2">
                                        <span className="absolute left-7 text-zinc-500 text-s font-medium">
                                            +20
                                        </span>
                                        <img
                                            src="/images/icon-egypt.png"
                                            alt="Egypt Icon"
                                            className="h-6 w-6 mr-6"
                                        />
                                    </div>
                                </div>
                                <FaCircleExclamation
                                    size={20}
                                    className={`text-neutral-500 absolute left-2 top-1/2 -translate-y-1/2 ${errors.phone?.message ? "text-red-500" : ""}`}
                                />
                            </div>

                            <div className="form-row relative flex flex-col mb-8">
                                <label
                                    htmlFor="Educationaldegree"
                                    className={`text-right text-teal-700 font-normal text-xl`}
                                >
                                    المؤهل التعليمي
                                </label>
                                <input
                                    type="text"
                                    id="Educationaldegree"
                                    className={`w-full bg-transparent border-b border-teal-700 p-2 focus:outline-none text-right`}
                                    placeholder={"ادخل المؤهل التعليمي"}
                                    {...register("Educationaldegree", { required: "برجاء ادخال البانات لهذا الحقل" })}
                                />
                            </div>

                            <button
                                // onClick={handleSaveChanges}
                                className="text-lg w-[250px] h-[45px] bg-teal-700 rounded-full text-white mx-auto block"
                            >
                                حفظ التغييرات
                            </button>
                        </form>
                    </div>

                    <div className="w-full md:w-[40%]">
                        <h3 className="text-teal-700 text-2xl font-normal text-right mb-12">
                            إضافه صورة شخصية
                        </h3>
                        <div className="flex items-center justify-center md:justify-end">
                            <label
                                htmlFor="image"
                                className="relative w-[200px] h-[200px] bg-gray-200 rounded-full shadow cursor-pointer overflow-hidden"
                            >
                                {selectedImage ? (
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Uploaded"
                                        className="w-full h-full object-cover"
                                    />
                                ) :
                                    user?.photo ?
                                        (
                                            <img
                                                src={user?.photo}
                                                alt="Uploaded"
                                                className="w-full h-full object-cover"
                                            />
                                        )
                                        : (
                                            <>
                                                <FaCloudUploadAlt
                                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-400 text-5xl"
                                                />
                                            </>
                                        )}
                            </label>
                            <input
                                type="file"
                                id="image"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="flex items-center md:items-end flex-col gap-4 text-right mb-12">
                            <p className="text-zinc-500 font-normal text-sm mt-6 text-center">
                                {isImageUploaded ? (
                                    <>
                                        يمكنك تعديل صورتك الشخصية
                                        <br />
                                        أو اختيار صورة جديدة من جهازك
                                    </>
                                ) : (
                                    <>
                                        يمكنك أختيار صورة من جهازك
                                        <br />
                                        الشخصي
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return null;
}

export default ProfileComplete