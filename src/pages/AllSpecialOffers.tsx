import Header from "../components/auth/Header"
import { PiShoppingCartLight } from "react-icons/pi";


const AllSpecialOffers = () => {
    return (
        <div>
            <Header />
            <main className='my-16'>
                <div className="container">
                    <div className='flex flex-row-reverse gap-8'>
                        <div className=''>
                            <img src='images/1.png' className='w-56 h-32'></img>
                        </div>
                        <div className="flex-grow flex flex-col gap-4">
                            <div className='lg:pt-4 flex flex-row-reverse items-center justify-between flex-wrap gap-y-3'>
                                <h2 className='text-right text-teal-950 text-3xl font-bold font-Tajawal'>٢ طن قمح خبز</h2>
                                <p className="text-teal-950 text-right font-medium md:text-2xl" dir="rtl">
                                    <span className="text-yellow-300 font-semibold">7.000</span> جم بدلا من 11.000 جم
                                </p>
                            </div>
                            <div className='flex flex-row-reverse items-center justify-between flex-wrap gap-y-3 md:text-2xl'>
                                <p className="text-teal-950 font-light text-right">
                                    احصل علي ٢ طن قمح الخبز المنقي بخصم
                                    <span className="text-yellow-300 font-extrabold font-Tajawal"> %22</span>
                                </p>
                                <div className="flex items-center gap-1 py-2 px-6 rounded-full border-2 border-teal-700 text-right text-teal-700">
                                    <PiShoppingCartLight />
                                    <button className='font-medium'>إضافة الي السلة</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className="my-8 border-gray-300" />
            </main>
        </div>
    )
}

export default AllSpecialOffers