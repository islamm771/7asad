import { CiMedicalCase } from "react-icons/ci";
import { FaCow } from "react-icons/fa6";
import { GiCorn, GiStrawberry, GiTomato } from "react-icons/gi";
import { LuAxe, LuMilk } from "react-icons/lu";
import { TbSeeding } from "react-icons/tb";
import { IAddProductForm, IProductCategories } from "../interface";
// import { TfiSpray } from "react-icons/tfi";
import { MdOutlineAgriculture } from "react-icons/md";


export const sectionsData = [
    { image: '/images/all.png', title: 'الكل' },
    { image: '/images/crops.png', title: 'محاصيل' },
    { image: '/images/veg.png', title: 'خضار' },
    { image: '/images/fruit.png', title: 'فاكهة' },
    { image: '/images/animal.png', title: 'منتجات حيوانية' },
    { image: '/images/med.png', title: 'أدوية' },
    { image: '/images/tools.png', title: 'أدوات زراعية' },
    { image: '/images/equip.png', title: 'معدات زراعية' },
    { image: '/images/milk.png', title: 'منتجات البان' },
    { image: '/images/seeds.png', title: 'تقاوي' },
];

export const ProductCategories: IProductCategories[] = [
    {
        label: "محاصيل",
        id: "crops",
        icon: GiCorn,
    },
    {
        label: "منتجات البان",
        id: "milks",
        icon: LuMilk,
    },
    {
        label: "تقاوي",
        id: "seeding",
        icon: TbSeeding,
    },
    {
        label: "معدات زراعية",
        id: "arg-equipment",
        icon: MdOutlineAgriculture,
    },
    {
        label: "خضار",
        id: "vegetables",
        icon: GiTomato,
    },
    {
        label: "أدوات زراعية",
        id: "arg-tools",
        icon: LuAxe,
    },
    {
        label: "فاكهة",
        id: "fruit",
        icon: GiStrawberry,
    },
    {
        label: "أدوية",
        id: "medicines",
        icon: CiMedicalCase,
    },
    {
        label: "منتجات حيوانية",
        id: "animals",
        icon: FaCow,
    },
    // {
    //     label: "مبيدات وأسمدة",
    //     id: "pesticides",
    //     icon: TfiSpray,
    // },
];


export const AddProductForm: IAddProductForm[] = [
    {
        label: "اسم المنتج",
        type: "text",
        id: "product-name",
        name: "name",
        placeholder: "ادخل اسم المنتج",
        required: true,
    },
    {
        label: "المكان",
        type: "text",
        id: "product-address",
        name: "place",
        placeholder: "ادخل مكان المنتج",
        required: true,
    },
    {
        label: "وصف المنتج",
        type: "text",
        id: "product-description",
        name: "description",
        placeholder: "ادخل مكان المنتج",
        required: true,
    },
    {
        label: "سعر الواحد",
        type: "number",
        id: "product-price",
        name: "price",
        placeholder: "ادخل سعر المنتج",
        required: true,
    },
    {
        label: "العدد",
        type: "number",
        id: "product-amount",
        name: "amount",
        placeholder: "ادخل عدد المنتج",
        required: true,
    },
    {
        label: "الخصم ان وجد",
        type: "number",
        id: "product-discount",
        name: "discount",
        placeholder: "ادخل سعر المنتج",
        required: true,
    },
    {
        label: "السعر بعد الخصم",
        type: "number",
        id: "product-priceAfterDiscount",
        name: "priceAfterDiscount",
        placeholder: "ادخل عدد المنتج",
        required: true,
    },
]



export const getUserData = () => {
    const userDataString = localStorage.getItem("user-info")
    const userData = userDataString ? JSON.parse(userDataString) : null
    return userData
}

export const getAdminData = () => {
    const adminDataString = localStorage.getItem("admin-info")
    const adminData = adminDataString ? JSON.parse(adminDataString) : null
    return adminData
}

