import { useSelector } from "react-redux";
import { Selectcategory } from "../../app/features/marketSlice";
import { useGetProductsQuery } from "../../app/features/ProductsSlice";
import { IProduct } from "../../interface";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const ProductsList = () => {
    const { category } = useSelector(Selectcategory);
    const { isLoading, data } = useGetProductsQuery({ category: category });

    if (isLoading) {
        return <div className="container py-4">
            <h1 className="text-teal-950 text-[30px] font-medium text-right mt-16 mb-8">
                {category ? category : "الكل"}
            </h1>
            <h3 className="text-3xl font-semibold py-12">Loading...</h3>
        </div>;
    }

    return (
        <div className="productsList container">
            <div className="flex flex-row-reverse items-center justify-between mt-16 mb-12">
                <h1 className="text-teal-950 text-[30px] font-medium text-right">
                    {category ? category : "الكل"}
                </h1>
                <Link to="/add-product" className="flex items-center gap-2 bg-teal-700 text-white text-lg py-2 px-5 rounded-sm">
                    <FaPlus />
                    أضافه منتج
                </Link>
            </div>

            {data?.data?.products.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.data?.products.map((product: IProduct, index: number) => (
                        <ProductCard
                            product={product}
                            key={index}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-red-600 text-xl font-medium text-center my-12">
                    There are no products available now
                </p>
            )}
        </div>
    );
};

export default ProductsList;
