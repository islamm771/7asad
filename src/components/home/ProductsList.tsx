import { useSelector } from "react-redux";
import { Selectcategory } from "../../app/features/marketSlice";
import { useGetProductsQuery } from "../../app/features/ProductsSlice";
import { IProduct } from "../../interface";
import ProductCard from "../ProductCard";

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
            <h1 className="text-teal-950 text-[30px] font-medium text-right mt-16 mb-8">
                {category ? category : "الكل"}
            </h1>

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
                <p className="text-red-600 text-xl font-medium text-center mt-8">
                    There are no products available now
                </p>
            )}
        </div>
    );
};

export default ProductsList;
