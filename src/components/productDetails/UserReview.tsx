import { FaStar } from "react-icons/fa"
import { IReview } from "../../interface"

interface IProps {
    review: IReview
}

const UserReview = ({ review: { createdAt, review: reviewText, rating, user } }: IProps) => {
    return <div className='user-review text-right flex flex-row-reverse gap-8 flex-wrap'>
        <div>
            <img className='w-20 h-w-20 rounded-full'
                src={user.photo ? user.photo :
                    "https://static.vecteezy.com/system/resources/previews/009/398/577/non_2x/man-avatar-clipart-illustration-free-png.png"}
                alt="review-user-photo" />
        </div>
        <div className='flex-grow'>
            <h3 className='text-teal-900 font-medium text-[20px] mb-1'>{user.name}</h3>
            <ul className='flex gap-1 justify-end mb-2'>
                {Array.from({ length: 5 }).map((_, idx) => (
                    <li key={idx}>
                        <FaStar size={16} className={rating >= (idx + 1) ? 'text-yellow-300' : 'text-gray-300'} />
                    </li>
                ))}
            </ul>
            <p>{reviewText}</p>
        </div>
        <div className='text-teal-600 font-medium text-[18px]'>
            {createdAt.slice(0, createdAt.indexOf("T"))}
        </div>
    </div>
}


export default UserReview