// import toiletries from "../../assets/toiletries-svgrepo-com.svg";

const HeroImage = () => {
  return (
    <div>
      {/* <img src={toiletries} classNameName="md:h-[70vh]" alt="" /> */}
      <div className="relative flex flex-col h-[50vh]  md:h-[100vh] items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
        <h1 className="relative flex items-center text-3xl font-bold  dark:opacity-80 transition-colors text-black">
          #SafeSpace
        </h1>
        <div className="mt-4">
          <div className="px-3 py-1  transition-colors ">
            <div className="flex items-center ">
              <h1 className="text-xl px-[1rem] text-center pb-[2rem] md:text-6xl  text-slate-900  ">
                Your one stop solution for all cleaning needs!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
