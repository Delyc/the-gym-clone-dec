export default function Tum(){
    return(
        <>
        <section className="xl:mx-auto xl:max-w-[90rem] mt-[96px] px-6">
            <h1 className="text-2.5xl text-dark-blue font-bold">TUM in numbers</h1>
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-[24px] mt-[48px]">
                <div className="xl:col-span-3 py-2 xl:py-0 w-[17rem] xl:w-auto xl:row-span-2 bg-primary-blue xl:px-[40px] flex flex-col items-center xl:items-start">
                    <h1 className="text-[60px] xl:text-[130px] text-white font-bold">50, 000</h1>
                    <p className="text-white font-bold xl:text-[34px] text-[20px]">Students</p>
                </div>

                <div className="bg-primary-yellow col-span-2 xl:flex xl:flex-row flex flex-col items-center  justify-between px-[20px]  items-center">
                    <h1 className="xl:text-[90px] text-[60px]  font-bold text-dark-blue">176</h1>
                    <h3 className="xl:text-[22px] text-[20px] text-center font-bold xl:w-1/2 text-dark-blue">ERC Grants for cutting-edge research</h3>
                </div>
                <div className="bg-secondary-purple py-2 xl:py-0 w-[17rem] xl:w-auto items-center flex flex-col xl:flex xl:flex-row xl:col-span-2  xl:justify-between xl:px-[20px]  items-center">
                <h1 className="xl:text-[90px] text-[60px] font-bold text-dark-blue">18</h1>
                    <h3 className="xl:text-[22px] text-[20px] font-bold xl:w-1/2  text-dark-blue">Nobel laureates</h3>
                </div>
            </div>
        </section>
        </>
    )
}