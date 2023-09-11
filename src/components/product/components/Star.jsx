import { AiFillStar } from 'react-icons/ai';


export const Star = ({ rating, size = 12, textSize = 'text-xs' }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
        <div className='flex justify-start items-center  '>
            <span className={`font-semibold text-[#ffa900] mr-1 ${textSize}`}>{rating}</span>
            {Array.from({ length: fullStars }, (_, i) => (
                <AiFillStar key={i} color={"#ffa900"} size={size} />
            ))}
            {halfStar ? <AiFillStar color={"#ffa900"} size={size} style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }} /> : null}
        </div>
    )
}