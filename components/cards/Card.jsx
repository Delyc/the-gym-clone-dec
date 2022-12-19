import Image from 'next/image'
import { podcast } from '../../data/podcast'
import news1 from '../../public/assets/images/news1.webp'
import Button from '../ui/Button'
export default function Card({image, tag, smallHeading, bigHeading, description, datePosted, readingTime, styles, buttonText}){
    let value=0
    return(
        <div className={`${styles} xl:w-[332px] mt-10 xl:mt-0 flex flex-col gap-3`}>
            <div className='relative w-full'>
            <Image src={image} alt="news" width={332} height={160} className="xl:w-full h-[256px] object-cover" />
            <span className='absolute bottom-0 bg-primary-gray text-dark-blue font-medium text-13.3333 py-0.5 px-2'>{tag}</span>

            </div>
            <div className='flex flex-col gap-[2px]'>
            <p className='text-[16px]  w-full font-bold text-dark-blue'>{smallHeading}</p>
            <span className='font-bold  w-full text-dark-blue text-[20px] leading-[1.3] '>{bigHeading}</span>
            </div>
            
            <p className='text-dark-blue  w-full font-sm font-medium'>{description}</p>

            <div className='flex justify-between  w-full text-dark-blue font-sm font-medium'>
                <p>{datePosted}</p>
                <p>{readingTime}</p>
            </div>

            

        </div>
    )

}