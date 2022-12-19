import { podcast } from "../../data/podcast";
import PodcastCard from "../cards/PodcastCard";
export default function Podcast(){
    return(
        <>
        <section className="mx-auto max-w-[90rem] grid grid-cols-3 gap-x-[144px] gap-y-[48px]">
            {podcast.map((elt, index) => {
                console.log("elt", elt.id)
                return(
                    <PodcastCard key={index} styles={`${elt.id === 1 && " col-span-2 w-full"}`} image = {elt.image} description={elt.description} smallHeading={elt.smallHeading}  buttonText={elt.buttonText}/>
                )
            })}
        </section>
        </>
    )
}