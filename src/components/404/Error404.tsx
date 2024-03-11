import err404 from "../../assets/404 error.svg";
const Error404 = () => {
  return (
    <div>
      <h1 className="pt-10 text-center">no such page exists </h1>
      <div className="flex justify-center">
        <img className="p-20" src={err404} alt="" />
      </div>
    </div>
  );
};

export default Error404;
