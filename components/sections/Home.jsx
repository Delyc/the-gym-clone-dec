export default function HomePage(){
    return(

        <>

        <section className="home h-[700px] w-full relative">
          
            <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>

        </section>
        <div className="absolute top-16 py-16 px-15 flex flex-col gap-6">
              <h1 className="text-white font-bold text-5xl w-[648px] leading-4.5">TUM. The Entrepreneurial
University</h1>
<p className="text-white leading-6 text-xl font-medium">Innovation through talent, excellence and responsibility</p>


<div className="w-11 h-11 bg-primary-blue grid place-content-center sticky top-0 bottom-10 right-[60px]">
<svg className="text-white" class="c-header__video-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<circle cx="12" cy="12" r="10"></circle>
						<polygon points="10 8 16 12 10 16 10 8"></polygon>
					</svg>

</div>
        </div>
        </>
    )
}