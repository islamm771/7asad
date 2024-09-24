import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Selectcategory } from "../../app/features/marketSlice";

const ProductsHeading = () => {
    const { category } = useSelector(Selectcategory);

    return (
        <div className="flex flex-row-reverse items-center justify-between mt-16 mb-12">
            <h1 className="text-teal-950 text-[30px] font-medium text-right">
                {category ? category : "الكل"}
            </h1>
            <Link to="/add-product" className="flex items-center gap-2 bg-teal-700 text-white text-lg py-2 px-5 rounded-sm">
                <FaPlus />
                أضافه منتج
            </Link>
        </div>
    )
}

export default ProductsHeading;