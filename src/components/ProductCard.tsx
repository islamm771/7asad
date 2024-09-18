import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useAddFavouriteMutation, useGetFavouritesQuery, useRemoveFavouriteMutation } from "../app/features/FavouriteSlice";
import { IFavorite, IProduct } from "../interface";

interface IProps {
    product: IProduct,
}

const ProductCard = ({ product }: IProps) => {
    const { data } = useGetFavouritesQuery({});
    const [addFavourite] = useAddFavouriteMutation();
    const [removeFavourite] = useRemoveFavouriteMutation();
    const navigate = useNavigate();
    const { name, place, description, photo, amount, price, date, user } = product

    const handleAddToFav = (id: string) => {
        addFavourite({ productId: id })
            .unwrap()
            .catch((error) => {
                console.error("Failed to add favorite:", error);
            });
    };

    const handleRemoveFromFav = (id: string) => {
        removeFavourite({ favouriteId: id })
            .unwrap()
            .catch((error) => {
                console.error("Failed to remove favorite:", error);
            });
    };
    const handleAddToCart = async () => {
        console.log("add to cart")
    }

    return (
        <div className="product-card">
            <div className="bg-white rounded-[10px] box-shadow border-2 border-teal-700 p-4 relative">
                <div className="absolute top-6 left-6 bg-white/50 p-2 rounded-full">
                    {data?.data?.favorites?.some((item: IFavorite) => item.product._id === product._id) ? (
                        <FaHeart size={18} className="text-red-500"
                            onClick={() => { handleRemoveFromFav("3465qweqwqsdasdsdfg") }}
                        />
                    ) : (
                        <FaRegHeart size={18} className="text-gray-500" role="button"
                            onClick={() => { handleAddToFav(product._id) }}
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