import { Fragment, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useGetProductReviewsQuery } from '../../app/features/ReviewsSlice';
import { IReview } from '../../interface';
import UserReview from './UserReview';

const ratings = [
    { label: 'ممتاز', width: '88%', color: ['from-green-400', 'to-lime-300'] },
    { label: 'جيد جدا', width: '75%', color: ['from-lime-300', 'to-lime-200'] },
    { label: 'جيد', width: '65%', color: ['from-yellow-400', 'to-yellow-100'] },
    { label: 'سئ', width: '54%', color: ['from-orange-500', 'to-orange-100'] },
    { label: 'سئ جدا', width: '20%', color: ['from-red-500', 'to-rose-300'] }
]


const Reviews = () => {
    const { id } = useParams()
    const { isLoading, data } = useGetProductReviewsQuery({ id: id })
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    if (isLoading) {
        return <div>
            <h3 className="text-3xl font-semibold py-12">Loading...</h3>
        </div>
    }

    return (
        <div className="md:px-12">
            <div className="flex items-center flex-col">
                <p className="text-black text-3xl font-medium mb-2 mt-12">{2.4}</p>
                <div className='flex items-center'>
                    {[...Array(5)].map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={28}
                                className={`me-1 ${Math.round(2.4) >= (index + 1) ? 'text-yellow-300' : 'text-gray-300'}`}
                            // onClick={() => setRating(ratingValue)}
                            // onMouseEnter={() => setHover(ratingValue)}
                            // onMouseLeave={() => setHover(0)}
                            // role="button"
                            // aria-label={`Rate ${ratingValue} stars`}
                            />
                        );
                    })}
                </div>
                <div className="flex items-center mb-12 mt-4 ml-2">
                    <p className="text-lg text-teal-950 font-normal">بناءا علي {data.data.review.length} تقييم </p>
                </div>
            </div>

            <div className="text-right mr-6">
                <div>
                    {ratings.map((rating, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <dd className="flex-1">
                                <div className="w-100px bg-zinc-100 rounded h-2.5 me-2 flex">
                                    <div className={`bg-gradient-to-l ${rating.color[0]} ${rating.color[1]} h-2.5 rounded`} style={{ width: rating.width, marginLeft: `calc(100% - ${rating.width})` }}></div>
                                </div>
                            </dd>
                            <dt className="text-xl font-medium text-teal-  950 ml-2">{rating.label}</dt>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-b border-gray-300 my-4 mt-8" />

            <div className="reviews mt-8">
                {data.data.review?.map((review: IReview, index: number) => (
                    <Fragment key={index}>
                        <UserReview review={review} />
                        <hr className="border-b border-gray-300 my-4" />
                    </Fragment>
                ))}
            </div>

            <div className='text-right py-5'>
                <h2 className='text-black text-2xl font-normal'>اكتب تقييمك</h2>

                <div className="flex items-center">
                    {[...Array(5)].map((_, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setRating(currentRating)}
                                    className="sr-only"
                                />
                                <FaStar
                                    className="text-xl"
                                    color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(0)}
                                    aria-label={`Rate ${currentRating} stars`}
                                />
                            </label>
                        );
                    })}
                </div>

                <textarea
                    className="w-full h-40 mt-4 p-2 border border-gray-300 rounded-xl text-right "
                    placeholder="...اكتب هنا"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                />

                <div className='flex items-center flex-col'>
                    <button
                        className="bg-teal-700 text-white rounded-[12px] font-bold mt-6 mb-12 px-24 py-1 text-lg"
                    // onClick={handleSubmit}
                    >
                        إرسال
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reviews