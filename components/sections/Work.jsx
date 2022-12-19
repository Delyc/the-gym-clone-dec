import Image from "next/image";
import Details from "../cards/details";
import Offer from '../../public/assets/images/offer.png'
const Work = () => {
  return (
    <div className="mt-20 ml-20 mx-auto max-w-[90rem] ">
      <span className="text-sm font-bold">Customized navigation</span>
      <h4 className="font-bold text-4xl">Discover what TUM has to offer</h4>
      <div className="flex px-10 mt-8">
        <div className="border max-w-[323px] max-h-[285px] px-2 pt-5 -mr-20 z-10 mt-10 bg-white">
          <span>For: </span>
          <div className="flex mt-5 flex-col w-full justify-start text-blue font-semibold text-lg">
            <input className="bg-gray pl-5 pr-40 py-2 flex justify-start" type='button' value='Prospective students'/>
            <input className="px-5 py-2 flex justify-start" type='button' value='Founders'/>
            <input className="px-5 py-2 mb-10 flex justify-start" type='button' value='Employees'/>
            <hr />
            <input type='button' className="px-5 py-2 mb-14 flex justify-start" value='Show all'/>
          </div>
        </div>
        <div className="mr-10 w-[90%]">
          <Image src={Offer} width={668} height={445} alt="work" />
        </div>
        <Details
          title="Prospective Students"
          content="Learn to bring ideas to life, discover new possibilities, work in teams and build networks."
          buttonText="Learn more"
        />
      </div>
    </div>
  );
};

export default Work