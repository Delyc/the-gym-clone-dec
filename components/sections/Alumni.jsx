import Image  from "next/image"
import alumni from '../../public/assets/images/alumni.webp'
import Button from "../ui/Button"
export default function Alumni(){
    return(
        <>
         <section className="xl:flex xl:flex-row xl:flex-row-reverse  items-center mt-[96px] relative px-6 xl:mx-auto xl:max-w-[90rem]">
            <div className="xl:w-784 xl:h-479.2">
                <Image src={alumni} alt="drives" className="xl:w-full xl:h-full"  />

            </div>
            

            <div className="bg-dark-orange text-dark-blue xl:w-712  xl:absolute xl:left-0 p-5 xl:p-10 flex flex-col gap-5">
                <h1 className="font-bold text-2.3xl">{'"'}Here I have met a lot of people who are breaking new ground{'"'}</h1>
                <p className="text-16">Philip Häusser, alumnus</p>
           <Button text="Readt the alumni story" styles="uppercase mt-3 font-bold bg-primary-blue text-white w-[264.49px] grid place-content-center h-[58px]" />
            </div>
        </section>
        </>
    )
}