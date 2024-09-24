import { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetProductQuery } from "../app/features/ProductsSlice"
import Details from "../components/productDetails/Details"
import Header from "../components/productDetails/Header"
import Reviews from "../components/productDetails/Reviews"

const ProductDetails = () => {
    const { id } = useParams()
    const { isLoading, data } = useGetProductQuery({ id: id })
    const [activeTab, setActiveTab] = useState('details');
    const [showAdditional, setShowAdditional] = useState(false)
    const [selectedImage, setSelectedImage] = useState<string>("");
    const handleSmallImageClick = (image: string) => {
        setSelectedImage(image);
    };
    if (isLoading) {
        return (
            <div className="product-details-loading">
                <Header />
                <div className="container">
                    <h3 className="text-3xl font-semibold py-12">Loading...</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="flex flex-col items-center justify-center w-full gap-6">
                    <img className="img w-full md:w-[380px] h-[280px] rounded-[5px] shadow-inner " src={selectedImage || data.data.product.photo[0]} alt="Selected Image" />
                    <div className="flex justify-center gap-5 overflow-x-scroll w-full" style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
                        {showAdditional ? (
                            Array(20).fill(data.data.product.photo[0]).map((image, index) => (
                                <img
                                    key={index}
                                    className="img w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-[5px] shadow-inner cursor-pointer"
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    onClick={() => handleSmallImageClick(image)}
                                />
                            ))
                        ) : (
                            <>
                                {Array(3).fill(data.data.product.photo[0]).map((image, index) => (
                                    <img
                                        key={index}
                                        className="img w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-[5px] shadow-inner cursor-pointer"
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        onClick={() => handleSmallImageClick(image)}
                                    />
                                ))}
                                <div className="relative" >
                                    <img
                                        className="img w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-[5px] shadow-inner cursor-pointer"
                                        src={data.data.product.photo[0]}
                                        alt={`image`}
                                    />
                                    <span className="absolute top-0 left-0 w-full h-full bg-black/50 text-white text-[30px] font-bold flex items-center justify-center rounded-[10px] cursor-pointer"
                                        onClick={() => setShowAdditional(true)}>+20</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex justify-center gap-24 mt-4">
                    <h2
                        className={`cursor-pointer text-xl px-5 md:px-10 py-2 ${activeTab === 'details' ? 'font-bold border-b-4 rounded-[2px] border-teal-700 pt-2  ' : ''}`}
                        onClick={() => setActiveTab("details")}>
                        تفاصيل
                    </h2>
                    <h2
                        className={`cursor-pointer text-xl px-5 md:px-10 py-2 ${activeTab === 'reviews' ? 'font-bold border-b-4 rounded-[2px] border-teal-700 pt-2 ' : ''}`}
                        onClick={() => setActiveTab("reviews")}>
                        تقييمات
                    </h2>
                </div>
                {activeTab === 'details' && <Details product={data.data.product} />}

                {activeTab === 'reviews' && <Reviews />}
            </div>
        </div>

    )
}

export default ProductDetails