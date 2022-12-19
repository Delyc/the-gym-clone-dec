import Card from "../cards/Card"
import { news } from "../../data/news"
import { news2 } from "../../data/news"
import Button from "../ui/Button"
export default function News() {
    return (
        <>

            <section className="grid grid-cols-1 gap-[24px]  xl:grid xl:grid-cols-4 xl:mx-auto xl:max-w-[90rem] xl:mt-12 px-6">
                <div className=" xl:col-span-2 flex flex-col gap-6">
                    <h1 className="font-bold text-[32px] text-dark-blue mt-10 xl:mt-0">News from TUM</h1>
                    <p className=" text-xl text-dark-blue">News, research results and events: everything that enthuses people at our university.</p>
                    <Button styles="text-white w-[101.33px] font-bold bg-primary-blue uppercase py-4 px-5" text="see all" />
                </div>



                {news.map((elt, index) => {
                    return (
                        <Card key={index} description={elt.description} image={elt.image} tag={elt.tag} datePosted={elt.datePosted} readingTime={elt.readingTime} smallHeading={elt.smallHeading} bigHeading={elt.bigheading} />
                    )
                })}




            </section>

            <section className="grid grid-cols-1 xl:grid-cols-4 w-full gap-[24px] mt-[51px]  xl:mx-auto xl:max-w-[90rem] px-6">
                <div className="xl:cols-span-2 "></div>
                {news2.map((elt, index) => {
                    return (
                        <Card key={index} styles="xl:ml-32 " description={elt.description} image={elt.image} tag={elt.tag} datePosted={elt.datePosted} readingTime={elt.readingTime} smallHeading={elt.smallHeading} bigHeading={elt.bigheading} />
                    )
                })}
            </section>




        </>
    )
}