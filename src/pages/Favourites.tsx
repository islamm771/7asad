import { useGetFavouritesQuery } from "../app/features/FavouriteSlice";
import FavCard from "../components/FavCard";
import { IFavorite } from "../interface";

const Favourites = () => {
    const { isLoading, data } = useGetFavouritesQuery({})

    if (isLoading) return <div className="container pt-16">
        <h3 className="text-center text-medium text-2xl">... جاري تحميل المفضلة</h3>
    </div>
    return (
        <div className="container py-16">
            {data.data.favorites.length ? (
                <div className="grid gap-10 md:gap-6">
                    {data.data.favorites.map((fav: IFavorite, index: number) => (
                        <FavCard fav={fav} key={index} />
                    ))}
                </div>
            ) : (
                <div className="">
                    <h3 className="text-center text-medium text-2xl">لا يوجد عناصر في المفضلة</h3>
                </div>
            )}
        </div>
    )
}

export default Favourites