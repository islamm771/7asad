import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { TbCameraPlus } from "react-icons/tb";
import { useAddProductMutation } from "../app/features/ProductsSlice";
import Header from "../components/auth/Header";
import Input from "../components/ui/Input";
import InputCheckBox from "../components/ui/InputCheckBox";
import { axiosInstance } from "../config/axios.config";
import { AddProductForm, ProductCategories } from "../data";
import { IAddProduct } from "../interface";

const AddProduct = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedImages, setSelectedImages] = useState<(File | null)[]>([null]);
    const [formData, setFormData] = useState<IAddProduct>({
        name: "",
        description: "",
        price: 0,
        amount: 0,
        photo: [],
        place: "",
        OneItemPrice: 0,
        discount: 0,
        priceAfterDiscount: 0,
        categoryName: "",
    });

    const [addProduct] = useAddProductMutation()

    const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedCategory(e.target.value);
        setFormData((prevData) => ({
            ...prevData,
            ["categoryName"]: e.target.value,
        }));
    };

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>, index: number) => {
        // const files = Array.from(e.target.files);
        const files = e.target.files;
        if (files) {
            const file = files[0];
            setSelectedImages((prevImages) => {
                const newImages = [...prevImages];
                newImages[index] = file;
                return newImages;
            });
            const formImageData = new FormData();
            formImageData.append('image', file);

            try {
                const { data } = await axiosInstance.post("/product/uploadImage", formImageData)
                setFormData((prevData) => ({
                    ...prevData,
                    photo: [...prevData.photo, data.image],
                }));
                toast.success("Image uploaded successfully", {
                    duration: 4000,
                    position: 'top-right',
                })
            } catch (error) {
                console.log(error)
            }

        }
    };

    const addMoreImageContainers = () => {
        // Add more image containers when the plus icon is clicked
        setSelectedImages((prevImages) => [...prevImages, null]);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const renderSelectCategories = ProductCategories.map(cat => (
        <div className="flex items-center gap-4" key={cat.id}>
            <InputCheckBox
                id={cat.id}
                value={cat.label}
                checked={selectedCategory === cat.label}
                onChange={handleCategoryChange}
            />
            <label
                htmlFor={cat.id}
                className="text-xl text-right text-teal-950 font-normal flex items-center"
            >
                <cat.icon className="text-2xl text-teal-700 ml-2" />
                {cat.label}
            </label>
        </div>
    ))

    const renderFormInputs = AddProductForm.map((input) => (
        <div className={`${input.name == "description" ? "col-span-2" : ""}`} key={input.id}>
            <label
                htmlFor={input.id}
                className="block text-right text-teal-950 text-lg md:text-2xl font-normal mb-4"
            >
                {input.label}
            </label>
            <Input
                type={input.type}
                id={input.id}
                name={input.name}
                required={input.required}
                placeholder={input.placeholder}
                value={formData[input.name]}
                onChange={handleInputChange}
            />
        </div>
    ))

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
        try {
            await addProduct({ product: formData })
            toast.success("Product added successfully", {
                duration: 2000,
                position: "top-right"
            })
            setFormData({
                name: "",
                description: "",
                price: 0,
                amount: 0,
                photo: [],
                place: "",
                OneItemPrice: 0,
                discount: 0,
                priceAfterDiscount: 0,
                categoryName: "",
            })
            setSelectedImages([null])
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Header />
            <div className="container">
                <form className="text-right my-10 space-y-10" dir="rtl" onSubmit={handleSubmit}>
                    <div className="category-selection">
                        <label className="text-right text-teal-950 text-2xl font-normal">
                            إختر قسم
                        </label>
                        <div className="text-right mt-6">
                            <div className="grid grid-cols-2 gap-8">
                                {renderSelectCategories}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {renderFormInputs}
                    </div>

                    <div className="image-selection">
                        <label className="block text-right text-teal-950 text-2xl font-normal"
                            htmlFor="price_after_dis"
                        >
                            يمكنك تحميل اكثر من 20 صورة للمنتج
                        </label>
                        {/* Container boxes for choosing multiple images */}
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6">
                            {selectedImages?.map((image, index) => (
                                <div key={index} className="w-full h-[140px] bg-zinc-300 rounded-[3px] flex items-center justify-center relative">
                                    {image?.name ? (
                                        <img
                                            key={index}
                                            src={URL.createObjectURL(image)}
                                            alt={`Uploaded Image ${index + 1}`}
                                            className="w-full h-full object-cover rounded-[3px] "
                                        />
                                    ) : (
                                        <TbCameraPlus className="text-5xl" />
                                    )
                                    }
                                    <input
                                        type="file"
                                        id={`image-${index}`}
                                        name={`image-${index}`}
                                        className="absolute inset-0 opacity-0 cursor-pointer "
                                        accept="image/*"
                                        required
                                        onChange={(e) => handleImageChange(e, index)}
                                    />
                                </div>
                            ))}
                            {/* Plus icon for adding more image containers */}
                            <div
                                className="w-full h-[140px] bg-zinc-300 rounded-[3px] flex items-center justify-center relative  cursor-pointer"
                                onClick={addMoreImageContainers}
                            >
                                <FaPlus className="text-5xl " />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center justify-center">

                        <button className="w-[270px] py-1.5 bg-teal-700 rounded-[3px] text-white text-[23px]">
                            نشر الأن
                        </button>

                        <button className="w-[270px] py-1.5 bg-white rounded-[3px] text-teal-700 border border-teal-700 text-[23px]">
                            مسح
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddProduct