import Home from "../../pages";
import Logo from "../../public/assets/svgs/Logo";
import Search from "../../public/assets/svgs/Search";
import Link from "next/link";
export default function Navbar() {
    return (
        <section>
            <header className="fixed z-50 bg-dark-blue w-full">
                <nav className="  xl:mx-auto xl:max-w-[90rem] py-5 px-6 w-full flex items-center xl:flex xl:flex-row xl:items-center gap-5 xl:gap-0 justify-between ">
                    <div className="flex items-center gap-4">
                        <svg className="text-white" width="33" height="33" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="m14.5 18.717-2.5 2.88-2.5-2.88h5zM8.5 13v3h-3v-3h3zm5 0v3h-3v-3h3zm5 0v3h-3v-3h3zm-10-5v3h-3V8h3zm5 0v3h-3V8h3zm5 0v3h-3V8h3zm-10-5v3h-3V3h3zm5 0v3h-3V3h3zm5 0v3h-3V3h3z" fill="currentColor" fill-rule="nonzero"></path>
                        </svg>
                        <svg className="text-white" width="80" height="42" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 38">
                            <path d="M28 0v31h8V0h37v38h-7V7h-8v31h-7V7h-8v31H21V7h-7v31H7V7H0V0h28z" fill="currentColor"></path>
                        </svg>
                        {/* <Home />
                <Logo /> */}
                        <span className="text-white hidden md:block text-xs leading-[1.1666666667] font-normal">Technical <br /> University <br /> of Munich</span>
                    </div>
                    <div className="flex gap-20 justify-bentween">
                        <ul className="hidden md:block xl:flex xl:flex-row text-sm font-bold text-white font-bold uppercase gap-5 h-full">
                            <Link href="/test" ><li>news and events</li></Link>
                            <Link href="/test" ><li>studies</li></Link>
                            <Link href="/test" ><li>lifelong learning</li></Link>
                            <Link href="/test" ><li>research</li></Link>
                            <Link href="/test" ><li>innovation</li></Link>
                            <Link href="/test" ><li>community</li></Link>
                            <Link href="/test" ><li>about mun</li></Link>





                        </ul>

                        <div className="flex justify-between ">
                            <div className="text-white uppercase font-bold flex items-center  gap-2">

                                <span className="opacity-50 ">de</span>
                                <div className="h-6 w-[1.5px] bg-white"></div>
                                <span>en</span>
                            </div>

                            <Search styles="text-white ml-6" />
                        </div>
                    </div>

                </nav>


            </header>
            <div className=" w-full md:hidden grad text-white font-bold px-6 flex flex-col gap-6 py-24 ">
                <h1 className="text-[36px] mt-24">TUM. The Entrepreneurial Univeristy</h1>
                <p className="text-[20px]">Innovation throught talent excellence and responsibility</p>
            </div>
        </section>
    )
}