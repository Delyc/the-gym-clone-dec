import Image from "next/image";
import Button from "../ui/Button";

const Details = ({ imageSrc, title, content, buttonText }) => {
  return (
    <div>
      {imageSrc? (
        <Image src={imageSrc} width={370} height={256} alt="image" />
      ) : null}
      <h4 className="text-4xl  text-dark-blue my-10 font-bold">{title}</h4>
      <p className="text-[20px] mb-10">{content}</p>
      <Button text={buttonText} styles="border border-primary-blue text-primary-blue font-bold px-[20px] py-[16px]" />
    </div>
  );
};

export default Details