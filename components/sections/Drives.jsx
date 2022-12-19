import Image  from "next/image"
import drives from '../../public/assets/images/drives.webp'
import Button from "../ui/Button"
export default function Drives(){
    return(
        <>
        <section className="flex items-center mt-[96px] relative mx-auto max-w-[90rem]">
            <div className="w-784 h-479.2">
                <Image src={drives} alt="drives" className="w-full h-full"  />

            </div>
            

            <div className="bg-primary-blue text-white w-712  absolute right-0 p-10 flex flex-col gap-5">
                <h1 className="font-bold text-2.3xl">What drives us: President Thomas F. Hofmann about TUM</h1>
                <p className="text-16">Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.</p>
           <Button text="Read more" styles="uppercase mt-3 font-bold bg-white text-primary-blue w-[130.44px] grid place-content-center h-[58px]" />
            </div>
        </section>
        </>
    )
}