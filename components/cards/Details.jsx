import Image from "next/image";
import TertiaryButton from "../ui/TertiaryButton";

const Details = ({ imageSrc, title, content, buttonText }) => {
  return (
    <div>
      {imageSrc? (
        <Image src={imageSrc} width={370} height={256} alt="image" />
      ) : null}
      <h4 className="text-4xl my-10 font-bold">{title}</h4>
      <p className="text-2xl mb-10">{content}</p>
      <TertiaryButton content={buttonText} />
    </div>
  );
};

export default Details