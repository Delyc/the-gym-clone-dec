export default function HomePage() {
    return (

        <>

            <section className="home h-[300px] xl:h-[700px] w-full  relative">


                <div className="w-full h-full bg-black opacity-50 absolute xl:top-0 xl:left-0"></div>

            </section>

            <div className="absolute top-16 xl:py-16 xl:px-15 flex flex-col gap-6 mx-auto max-w-[90rem] px-6">
                <h1 className="text-white font-bold xl:text-5xl xl:w-[648px] hidden md:block  leading-4.5">TUM. The Entrepreneurial
                    University</h1>
                <p className="text-white leading-6 text-xl hidden md:block  font-medium">Innovation through talent, excellence and responsibility</p>


                <div className="w-11 h-11 bg-primary-blue absolute grid place-content-center bottom-[-46rem] right-[-15rem]  xl:bottom-[-20rem] xl:right-[-45rem]">
                    <svg className="text-white" class="c-header__video-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>

                </div>
            </div>
        </>
    )
}