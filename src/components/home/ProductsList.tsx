import { useSelector } from "react-redux";
import { Selectcategory } from "../../app/features/marketSlice";
import { useGetProductsQuery } from "../../app/features/ProductsSlice";
import { IProduct } from "../../interface";
import ProductCard from "../ProductCard";
import { useState } from "react";

const ProductsList = () => {
    const { category } = useSelector(Selectcategory)
    const { isLoading, data } = useGetProductsQuery({ category: category })
    const [favorites, setFavorites] = useState<IProduct[]>([])
    const handleFavourite = (product: IProduct) => {
        const updatedFavorites = favorites.includes(product)
            ? favorites.filter((item: IProduct) => item._id !== product._id)
            : [...favorites, product];
        setFavorites(updatedFavorites);
    }

    console.log(favorites)

    if (isLoading) {
        return <div className="container py-4">Loading...</div>
    }
    return (
        <div className="productsList container pt-8">
            <h1 className="text-teal-950 text-[30px] font-medium text-right mt-8 mb-8">{category ? category : "الكل"}</h1>
            <div className="flex flex-wrap">
                {data.data.products.length > 0 ? (
                    data.data.products.map((product: IProduct, index: number) => (
                        <ProductCard product={product} key={index} favourites={favorites} handleFavourite={handleFavourite} />
                    ))
                ) : (
                    <div className="w-full flex items-center justify-center h-32">
                        <p className="text-red-600 text-xl font-medium">There are no products available now</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductsList