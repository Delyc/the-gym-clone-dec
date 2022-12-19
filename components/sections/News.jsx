import Card from "../cards/Card"
import { news } from "../../data/news"
import Button from "../ui/Button"
export default function News(){
    return(
        <>
     
        <section className="grid grid-cols-4 mx-auto max-w-[90rem] mt-12">
            <div className=" col-span-2 flex flex-col gap-6">
            <h1 className="font-bold text-[32px] text-dark-blue">News from TUM</h1>
        <p className=" text-xl text-dark-blue">News, research results and events: everything that enthuses people at our university.</p>
        <Button styles="text-white w-[101.33px] font-bold bg-primary-blue uppercase py-4 px-5" text="see all"/>
            </div>
        

    
        {news.map((elt) => {
            return(
                <Card  description={elt.description} image={elt.image} tag={elt.tag} datePosted={elt.datePosted} readingTime={elt.readingTime} smallHeading={elt.smallHeading} bigHeading={elt.bigheading}/>
            )
        })}




        </section>

        <section className="grid grid-cols-4 w-full  mt-[51px]">
            <div className="cols-span-2 "></div>
{news.map((elt) => {
            return(
                <Card styles="ml-32"  description={elt.description} image={elt.image} tag={elt.tag} datePosted={elt.datePosted} readingTime={elt.readingTime} smallHeading={elt.smallHeading} bigHeading={elt.bigheading}/>
            )
        })}
        </section>



   
        </>
    )
}