import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const SpecialOffers = () => {

    return (
        <div className="container">
            <h1 className="text-teal-950 text-[30px] font-medium text-right pr-4">
                عروض خاصة
            </h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                autoplay
                modules={[Pagination, Autoplay]}
                className='special-offers-swiper !pb-[50px]'
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-8 w-full bg-white rounded-[20px] shadow border-2 border-teal-700 mt-6">
                        <div className="flex-shrink-0 mt-4 md:mt-0">
                            <img
                                className="w-full md:w-[360px] h-[200px] md:h-auto rounded-[10px]"
                                src="/images/1.png"
                                alt="Offer Image"
                            />
                        </div>
                        <div className="flex-grow p-6 text-right">
                            <p className="text-teal-950 text-[23px] font-medium">
                                ٢ طن قمح خبز
                            </p>
                            <p className="text-teal-900 text-[22px] font-light mt-4">
                                احصل على 2 طن قمح الخبز المنقي
                                <br />
                                بخصم{" "}
                                <span className="text-yellow-300 text-[25px] font-bold">%22</span>
                            </p>
                            <Link to="/all-special-offers" className="text-white text-xl flex items-center" >
                                <div className="flex justify-center md:justify-start mt-4 md:mt-0">
                                    <button className="btn w-[150px] h-[47px] bg-teal-700 rounded-[5px] text-white hover:bg-teal-600 hover:shadow-md transition duration-300">
                                        احصل عليه
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-8 w-full bg-white rounded-[20px] shadow border-2 border-teal-700 mt-6">
                        <div className="flex-shrink-0 mt-4 md:mt-0">
                            <img
                                className="w-full md:w-[360px] h-[200px] md:h-auto rounded-[10px]"
                                src="/images/2.png"
                                alt="Offer Image"
                            />
                        </div>
                        <div className="flex-grow p-6 text-right">
                            <p className="text-teal-950 text-[23px] font-medium">
                                ٢ طن طماطم
                            </p>
                            <p className="text-teal-900 text-[22px] font-light mt-4">
                                احصل على 2 طن طماطم
                                <br />
                                بخصم{" "}
                                <span className="text-yellow-300 text-[25px] font-bold">%22</span>
                            </p>
                            <Link to="/all-special-offers" className="text-white text-xl flex items-center" >
                                <div className="flex justify-center md:justify-start mt-4 md:mt-0">
                                    <button className="btn w-[150px] h-[47px] bg-teal-700 rounded-[5px] text-white hover:bg-teal-600 hover:shadow-md transition duration-300">
                                        احصل عليه
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-8 w-full bg-white rounded-[20px] shadow border-2 border-teal-700 mt-6">
                        <div className="flex-shrink-0 mt-4 md:mt-0">
                            <img
                                className="w-full md:w-[360px] h-[200px] md:h-[177px] rounded-[10px]"
                                src="/images/3.jpg"
                                alt="Offer Image"
                            />
                        </div>
                        <div className="flex-grow p-6 text-right">
                            <p className="text-teal-950 text-[23px] font-medium">
                                ٢ طن قمح بطاطس
                            </p>
                            <p className="text-teal-900 text-[22px] font-light mt-4">
                                احصل على 2 طن بطاطس
                                <br />
                                بخصم{" "}
                                <span className="text-yellow-300 text-[25px] font-bold">%22</span>
                            </p>
                            <Link to="/all-special-offers" className="text-white text-xl flex items-center" >
                                <div className="flex justify-center md:justify-start mt-4 md:mt-0">
                                    <button className="btn w-[150px] h-[47px] bg-teal-700 rounded-[5px] text-white hover:bg-teal-600 hover:shadow-md transition duration-300">
                                        احصل عليه
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SpecialOffers;
