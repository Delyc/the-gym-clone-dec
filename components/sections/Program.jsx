import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../../public/assets/images/select.png'
import next from '../../public/assets/images/next.png'
export default function Program(){
    const[open, setOpen] = useState(false)
    return(
        <>
        <section className="px-6 xl:mx-auto xl:max-w-[90rem] mt-[68px]">

        <div className='relative'>
            <div onClick={()=>setOpen(!open)} className='flex justify-between bg-primary-gray border-b border-dark-blue items-center'>
        <input onClick={()=>setOpen(!open)} placeholder="Search degree program or enter keyword " className="p-[20px] relative bg-primary-gray text-[1.5rem] font-bold outline-none " />

                <Image src={arrow} alt="allot" width={16} height={6} className="w-8 h-8" />
            </div>
        <Link href="#" className='w-full flex gap-2 justify-end text-primary-blue font-bold mt-[20px]'>Degree programs<Image src={next} alt="next" height={20} width={20}/></Link>
        {open && <div className='absolute left-0 top-20 w-full h-44 bg-white border  flex flex-col  py-3 border z-50 overflow-y-auto'>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
        <p className='hover:bg-primary-blue px-[20px] hover:text-white hover:font-bold py-2'>Aerospace - Bachelor of Science (B.Sc.)</p>
     
        

            
            </div>}
            </div>
        </section>
      
        </>
    )
}