import { useState } from "react"
import { FaBookmark, FaUser } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useRemoveFromCartMutation } from "../app/features/CartSlice"
import { IFavorite } from "../interface"

interface IProps {
    cartItem: IFavorite,
}

const CartCard = ({ cartItem }: IProps) => {
    const [removeFromCart] = useRemoveFromCartMutation();
    const { product } = cartItem
    const [quantity, setQuantity] = useState<number>(1);

    const handleRemoveFromCart = (id: string) => {
        removeFromCart({ productId: id })
            .unwrap()
            .catch((error) => {
                console.error("Failed to remove favorite:", error);
            });
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    return (
        <div className="fav-card flex flex-row-reverse gap-5 md:gap-8 flex-wrap">
            <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
                <img className="w-full h-full rounded-xl" src={product.photo[0]} alt="" />
            </div>
            <div className="flex flex-col gap-3 md:gap-5 flex-grow py-2">
                <div className="title flex flex-row-reverse gap-6 md:gap-16 flex-wrap">
                    <h3 className="text-3xl font-medium">{product.name}</h3>
                    <ul>
                        <li className="flex flex-row-reverse text-xl text-teal-950">
                            <FaUser className="text-amber-500 ml-3" />
                            {product.user}
                        </li>
                        <li className="flex flex-row-reverse text-xl text-teal-950">
                            <FaLocationDot className="text-yellow-300 mt-1 ml-3" />
                            {product.place}
                        </li>
                    </ul>
                </div>
                <p className="text-right text-slate-600 text-[16px] font-normal leading-8">
                    {product.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-2" dir="rtl">
                    <button className="text-teal-950 text-start text-xl" onClick={() => handleRemoveFromCart(product._id)}>
                        حذف <RiDeleteBin6Line className="text-red-600 text-2xl mt-1 inline" />
                    </button>
                    <button className="text-teal-950 text-start text-xl">
                        حفظ لاحقا <FaBookmark className="text-green-300 text-xl mt-1 inline" />
                    </button>
                    <div className="flex">
                        <button
                            className="counter-btn w-[40px] h-[30px] bg-stone-300 rounded-2xl text-[22px] font-bold flex items-center justify-center"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <p className="text-teal-950 text-[18px] font-medium ml-4 mr-4">
                            {quantity}
                        </p>
                        <button
                            className="counter-btn w-[40px] h-[30px] bg-teal-700 bg-opacity-80 rounded-2xl text-white font-bold text-[18px] flex items-center justify-center"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default CartCard