import { Why_Us_Data } from "./why_us.data";

const Why_us = () => {
  return (
    <div className="glass  mt-2 mx-2 text-center px-4 pb-4 ">
      <h1 className="text-2xl md:text-4xl pt-7 pb-2  ">Why Us ?</h1>
      <div className=" px-5 pt-[2rem] bg-white pb-6  flex flex-col  ">
        <div className="grid grid-cols-4  md:grid-cols-4 justify-between pt-0 pb-8">
          {Why_Us_Data.map(({ id, title, icon }) => (
            <div className="flex flex-col items-center" key={id}>
              <h1 className="">
                <img src={icon} className="max-w-10" alt={title} />
              </h1>
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="px-10 py-5 bg-blue-300 pb-6 ">
          <ul className="list-disc md:list-none font-thin ">
            <li>Our Room Freshners are infused with Essential oils</li>
            <br />
            <li>Our Room Freshners are Toxin free</li>
            <br />
            <li>
              None of our range of handwashes contain harmful chemicals like
              Parabens , Triclosan ,Phosphates , Formaldehyde
            </li>
            <br />
            <li>Our Room Freshners are water based</li>
            <br />
            <li>No Minimum order quantity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Why_us;
