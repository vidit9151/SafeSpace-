import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 glass  mt-5 mx-2  ">
      <div className="md:pl-[5rem]">
        <HeroImage />
      </div>
      <div className="flex items-center ">
        <h1 className="text-2xl px-[1rem] text-center pb-[2rem] md:text-6xl  ">
          Your one stop solution for all cleaning needs!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
