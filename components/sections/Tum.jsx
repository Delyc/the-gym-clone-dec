export default function Tum(){
    return(
        <>
        <section className="mx-auto max-w-[90rem] mt-[96px]">
            <h1 className="text-2.5xl text-dark-blue font-bold">TUM in numbers</h1>
            <div className="grid grid-cols-5 gap-[24px] mt-[48px]">
                <div className="col-span-3 row-span-2 bg-primary-blue px-[40px]">
                    <h1 className="text-[130px] text-white font-bold">50, 000</h1>
                    <p className="text-white font-bold text-[34px]">Students</p>
                </div>

                <div className="bg-primary-yellow col-span-2 flex  justify-between px-[20px]  items-center">
                    <h1 className="text-[90px] font-bold text-dark-blue">176</h1>
                    <h3 className="text-[22px] font-bold w-1/2 text-dark-blue">ERC Grants for cutting-edge research</h3>
                </div>
                <div className="bg-secondary-purple flex col-span-2  justify-between px-[20px]  items-center">
                <h1 className="text-[90px] font-bold text-dark-blue">18</h1>
                    <h3 className="text-[22px] font-bold w-1/2  text-dark-blue">Nobel laureates</h3>
                </div>
            </div>
        </section>
        </>
    )
}