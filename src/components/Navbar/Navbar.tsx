import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <div className="shadow-inner  shadow-black flex  glass justify-between h-16 items-center  ">
      <div className="pl-10 ">
        <Logo />
      </div>
      <div className="pr-10">
        <Navlinks />
      </div>
    </div>
  );
};

export default Navbar;
