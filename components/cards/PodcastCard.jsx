import Image from 'next/image'
import { podcast } from '../../data/podcast'
import news1 from '../../public/assets/images/news1.webp'
import Button from '../ui/Button'
export default function PodcastCard({ image, tag, smallHeading, bigHeading, description, datePosted, readingTime, styles, buttonText }) {
    let value = 0
    return (
        <>
            <div className={`${styles} hidden md:block  w-[370.68px] flex flex-col gap-3`}>
                <div className='relative w-full'>
                    <Image src={image} alt="news" width={332} height={160} className="xl:w-full xl:h-[256px] object-cover" />

                </div>
                <div>
                    <p className='text-[24px] mt-[24px]  w-full font-bold text-dark-blue'>{smallHeading}</p>
                </div>

                <p className='text-dark-blue font-medium w-full font-[16px] mt-[16px]'>{description}</p>

                <div className='flex justify-between  w-full text-dark-blue font-sm'>
                    <p>{datePosted}</p>
                    <p>{readingTime}</p>
                </div>
                <Button styles={`text-primary-blue border border-primary-blue px-[20px] py-[16px] mt-[24px]
            })} `} text={buttonText} />


            </div>

            <div className={`${styles} mt-12 md:hidden  flex flex-col gap-3`}>
                <div className='relative w-full'>
                    <Image src={image} alt="news" width={332} height={160} className="xl:w-full xl:h-[256px] object-cover" />

                </div>
                <div>
                </div>

                <p className='text-dark-blue  w-full font-sm'>{description}</p>

                <Button styles={`text-primary-blue border border-primary-blue px-[20px] py-[16px] 
})} `} text={buttonText} />


            </div>

        </>
    )

}