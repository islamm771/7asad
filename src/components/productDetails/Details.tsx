import { Link } from "react-router-dom";
import { IProduct } from "../../interface"
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useState } from "react";
import { BiSolidMessageAltDots } from "react-icons/bi";

interface IProps {
    product: IProduct
}

const Details = ({ product: { name, place, description, price, user } }: IProps) => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="details-container text-right mt-12">
            <h1 className="text-teal-950 text-2xl font-medium text-right">
                {/* قمح خبز منقي \ كفر الشيخ */}
                {name} / {place}
            </h1>

            <div className="description-container text-right">
                <p className="text-slate-600 text-[20px] leading-[50px] mt-5">
                    {/* لدينا للبيع محصول قمح ذو جوده عاليه وممتازه.يتميز القمح باللون الذهبي الجميل ويتمتع بحبوب كبيرة وممتلئه يتم زراعه <br /> هذا المحل باستخدام أفضل الممارسات الزراعيه وبدون استخدام المبيدات الحشرية الضاره يتم حصاد القمح في وقته المناسب  */}
                    {description}
                </p>
                {/* Seller Info */}
                <div className='mt-8 mr-4 '>
                    <h4 className="text-right text-slate-600 text-2xl -mb-3">
                        البائع
                    </h4>
                </div>

                <div className="seller-info-container flex items-center gap-6 flex-wrap flex-row-reverse mt-8">

                    <img
                        className="rounded-full w-24 h-24"
                        src="https://static.vecteezy.com/system/resources/previews/009/398/577/non_2x/man-avatar-clipart-illustration-free-png.png"
                        alt="Seller Image" />

                    <div className="text-right flex-grow">
                        <p className="text-teal-950 text-[18px] font-medium">
                            {user.name}
                        </p>
                        <p className="text-teal-950 text-[18px] font-light mb-1">
                            {user.role}
                        </p>
                        <div className='flex justify-end'>
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} size={16} className={`me-1 ${user.userRating >= (index + 1) ? 'text-yellow-300' : 'text-gray-300'}`} />
                            ))}
                        </div>
                    </div>

                    <div className='text-right flex-grow'>
                        <p className="text-teal-950 text-xl font-light">
                            :رقم الهاتف
                        </p>
                        <p className="text-teal-950 text-xl font-normal">
                            {user.phone}
                        </p>
                    </div>

                    <div className='text-right'>
                        <BiSolidMessageAltDots size={40} className="text-teal-700" />
                    </div>
                </div>

                <div className=" flex items-center flex-row-reverse justify-between mt-12">

                    <p className="text-teal-700 text-2xl font-bold">
                        طن\جم {price}
                    </p>
                    <div className="flex">
                        <button
                            className="counter-btn w-[40px] h-[30px] bg-stone-300 rounded-2xl text-[22px] font-bold flex items-center justify-center"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <p className="text-teal-950 text-[18px] font-medium ml-4 mr-4">{quantity}</p>
                        <button
                            className="counter-btn w-[40px] h-[30px] bg-teal-700 bg-opacity-80 rounded-2xl text-white font-bold text-[18px] flex items-center justify-center"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                        <p className="text-teal-950 text-2xl font-medium ml-4">
                            :الكمية
                        </p>
                    </div>
                </div>


                <div className="flex items-center justify-center flex-wrap gap-4 mt-12 mb-8">
                    <Link to="/cart">
                        <button className="w-[200px] h-[45px] bg-white rounded-[7px] border border-teal-700 text-teal-950 text-[23px] p-2 flex items-center">
                            <FaShoppingCart className="text-yellow-300 text-xl mr-2" />
                            إضافة الى السلة
                        </button>
                    </Link>

                    <Link to="/cart">
                        <button className="w-[200px] h-[45px] bg-teal-700 rounded-[7px] text-white text-[23px] font-bold ">
                            شراء الان
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}


export default Details