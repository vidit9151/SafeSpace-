import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 glass  mt-5 mx-2 h-[10rem]">
      <div>
        <HeroImage />
      </div>
      <h1 className="text-2xl ">
        Your all stop solution for house cleaning supply need
      </h1>
    </div>
  );
};

export default Hero;
