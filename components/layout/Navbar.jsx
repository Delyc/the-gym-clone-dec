import Home from "../../pages";
import Logo from "../../public/assets/svgs/Logo";
import Search from "../../public/assets/svgs/Search";

export default function Navbar() {
    return (
        <nav className="bg-dark-blue py-5 px-6 w-full flex items-center justify-between ">
            <div className="flex items-center gap-4">
                <svg className="text-white" width="33" height="33" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="m14.5 18.717-2.5 2.88-2.5-2.88h5zM8.5 13v3h-3v-3h3zm5 0v3h-3v-3h3zm5 0v3h-3v-3h3zm-10-5v3h-3V8h3zm5 0v3h-3V8h3zm5 0v3h-3V8h3zm-10-5v3h-3V3h3zm5 0v3h-3V3h3zm5 0v3h-3V3h3z" fill="currentColor" fill-rule="nonzero"></path>
                </svg>
                <svg className="text-white" width="80" height="42" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 38">
                    <path d="M28 0v31h8V0h37v38h-7V7h-8v31h-7V7h-8v31H21V7h-7v31H7V7H0V0h28z" fill="currentColor"></path>
                </svg>
                {/* <Home />
                <Logo /> */}
                <span className="text-white text-xs leading-[1.1666666667] font-normal">Technical <br /> University <br /> of Munich</span>
            </div>
<div className="flex gap-20 justify-bentween">
            <ul className="flex text-sm font-bold text-white font-bold uppercase gap-5">
                <li>news and events</li>
                <li>studies</li>
                <li>lifelong learning</li>
                <li>research</li>
                <li>innovation</li>
                <li>community</li>
                <li>about mun</li>


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
    )
}