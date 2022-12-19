import React, {useState} from 'react'
import Link from 'next/link'
export default function Program(){
    const[open, setOpen] = useState(false)
    return(
        <>
        <section className="px-6 xl:mx-auto xl:max-w-[90rem] mt-[68px]">

        <div className='relative'>
        <input onClick={()=>setOpen(!open)} placeholder="Search degree program or enter keyword " className="p-[20px] relative bg-primary-gray text-[1.5rem] font-bold w-full outline-none border-b border-dark-blue" />
        <Link href="#" className='w-full flex justify-end text-primary-blue font-bold'>Degree programs</Link>
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