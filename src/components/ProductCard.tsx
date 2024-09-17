import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../interface"
import { GrCart } from "react-icons/gr";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface IProps {
    product: IProduct,
    favourites: IProduct[],
    handleFavourite: (item: IProduct) => void
}

const ProductCard = ({ product, favourites, handleFavourite }: IProps) => {
    const navigate = useNavigate();
    const { name, place, description, photo, amount, price, date, user } = product

    const handleAddToCart = async () => {
        console.log("add to cart")
    }

    return (
        <div className="w-full sm:w-1/3 mb-6 px-2">
            <div className="bg-white rounded-[10px] box-shadow border-2 border-teal-700 p-4 relative">
                <div className="absolute top-6 left-6 bg-white/50 p-2 rounded-full">
                    {favourites.includes(product) ? (
                        <FaHeart size={18} className="text-red-500"
                            onClick={() => handleFavourite(product)}
                        />
                    ) : (
                        <FaRegHeart size={18} className="text-gray-500" role="button"
                            onClick={() => handleFavourite(product)}
                        />
                    )}
                </div>
                <Link to={`/product/${product["_id"]}`}>
                    <img
                        className="planet-image h-[255px] mx-auto rounded-lg"
                        src={photo[0]}
                        alt={name}
                    />
                </Link>
                <div className="flex items-center justify-between mt-4">
                    <p className="count text-teal-700 text-[18px] font-medium">
                        العدد: {amount}
                    </p>
                    <p className="text-teal-900 text-[23px] font-medium text-right">
                        <Link to={`/product/${product["_id"]}`} >{name}</Link>
                    </p>
                </div>
                <p className="text-right text-slate-600 text-[10px] mb-2">
                    {description}
                </p>
                <p className="text-right text-slate-600 text-[15px] font-bold mb-2">
                    البائع: {user.name} / {place}
                </p>
                <p className="text-right text-slate-600 text-[14px] font-bold mb-2">
                    احصل عليه يوم: {date.slice(0, date.indexOf("T"))}
                </p>
                <div className="flex items-center gap-[20px] mt-6">
                    <button
                        type="button"
                        className="btn w-[120px] h-[35px] bg-teal-700 rounded-[5px] text-white"
                        onClick={() => { navigate(`/product/${product["_id"]}`); }}
                    >
                        احصل عليها
                    </button>
                    <div className="flex items-center justify-between flex-1">
                        <button onClick={handleAddToCart}><GrCart className="text-teal-700 text-2xl" /></button>
                        <p className="text-teal-700 text-[18px] font-medium mb-0">
                            {price} طن/جم
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductCard