import { useState } from "react"
import { FaBookmark, FaUser } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useRemoveFavouriteMutation } from "../app/features/FavouriteSlice"
import { IFavorite } from "../interface"

interface IProps {
    fav: IFavorite,
}

const FavCard = ({ fav }: IProps) => {
    const [removeFavourite] = useRemoveFavouriteMutation();
    const { product } = fav
    const [quantity, setQuantity] = useState<number>(1);

    const handleRemoveFromFav = (id: string) => {
        removeFavourite({ favouriteId: id })
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
        <div className="fav-card flex flex-row-reverse gap-8">
            <div className="w-[200px] h-[200px]">
                <img className="w-full h-full rounded-xl" src={product.photo[0]} alt="" />
            </div>
            <div className="flex flex-col gap-5 flex-grow py-2">
                <div className="title flex flex-row-reverse gap-16">
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
                    {/* .لدينا للبيع محصول قمح ذو جودة عالية وممتازة. يتمزَّر القمح باللون
                    الذهبي الجميل ويتمتع بحبوب كبيرة وممتلئة
                    .يتم زراعة هذا المحصول باستخدام أفضل الممارسات الزراعية وبدون
                    استخدام المبيدات الحشرية الضارة
                    .يتم حصاد القمح في وقته المناسب{" "} */}
                    {product.description}
                </p>
                <div className="flex items-center justify-between mt-2">
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
                    <button className="text-teal-950 mr-2 text-xl">
                        حفظ لاحقا <FaBookmark className="text-green-300 text-xl mr-0 mt-1 inline" />
                    </button>
                    <button className="text-teal-950 text-xl mr-2" onClick={() => handleRemoveFromFav(fav._id)}>
                        حذف <RiDeleteBin6Line className="text-red-600 text-2xl mt-1 inline" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default FavCard