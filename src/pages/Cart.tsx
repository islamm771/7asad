import { useGetCartQuery } from "../app/features/CartSlice";
import CartCard from "../components/CartCard";
import { IFavorite } from "../interface";

const cart: IFavorite[] = [
    {
        _id: "",
        user: "",
        product: {
            _id: "6668985a44c82943b6ff7be0",
            name: "تفاح",
            description: "تفاح امريكاني",
            photo: [
                "https://res.cloudinary.com/dbqy6aa9w/image/upload/v1718130773/hasad-live/1000018097_icy7hr.jpg"
            ],
            price: 10,
            amount: 5,
            place: "فوه",
            OneItemPrice: 10,
            discount: 0,
            priceAfterDiscount: 0,
            categoryName: "فاكهة",
            user: "6668969244c82943b6ff7bb1",
            date: "2024-06-11T18:32:58.139Z",
            __v: 0,
        },
        __v: 0,
    }
]


const Cart = () => {
    const { isLoading } = useGetCartQuery({})

    if (isLoading) return <div className="container pt-16">
        <h3 className="text-center text-medium text-2xl">... جاري تحميل السلة</h3>
    </div>
    return (
        <div className="container py-16">
            {cart.length ? (
                <div className="grid gap-10 md:gap-6">
                    {cart.map((cartItem: IFavorite, index: number) => (
                        <CartCard cartItem={cartItem} key={index} />
                    ))}
                </div>
            ) : (
                <div className="">
                    <h3 className="text-center text-medium text-2xl">لا يوجد عناصر في السلة</h3>
                </div>
            )}
        </div>
    )
}

export default Cart