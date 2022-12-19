import Button from "../ui/Button";

export default function Support(){
    return(
        <section className="mx-auto max-w-[90rem] py-20">
            <div className="px-[40px] py-[40px] bg-whitish-purple flex flex-col items-center gap-5">
                <h3 className="text-dark-blue font-bold text-[28px]">Giving</h3>
                <p className="text-[20px] text-dark-blue ">Support research, innovation and teaching at one of the best technical universities in Europe. Show social responsibility and help nurture talent.</p>
            <Button  text="Support us" styles="bg-primary-blue uppercase text-white font-bold mt-1 px-[20px] py-[16px]"/>
            </div>
        </section>
    )
}