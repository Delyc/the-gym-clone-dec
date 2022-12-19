import Image  from "next/image"
import building from '../../public/assets/images/building.webp'
import Button from "../ui/Button"
export default function School(){
    return(
        <>
         <section className="px-6 xl:flex xl:flex-row items-center mt-[96px] relative xl:mx-auto xl:max-w-[90rem]">
            <div className="xl:w-784 xl:h-479.2">
                <Image src={building} alt="drives" className="w-full h-full"  />

            </div>
            

            <div className="bg-primary-purple text-dark-blue xl:w-712  xl:absolute xl:right-0 p-5 xl:p-10 flex flex-col gap-5">
                <h1 className="font-bold text-2.3xl">Schools and Research Centers</h1>
                <p className="text-16">They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation.</p>
           <Button text="Organisation" styles="uppercase mt-3 font-bold bg-primary-blue text-white w-[130.44px] grid place-content-center h-[58px]" />
            </div>
        </section>
        </>
    )
}