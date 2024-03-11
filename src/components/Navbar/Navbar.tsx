import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { GiHamburgerMenu } from "react-icons/gi";

import { useRecoilState } from "recoil";
import { hamburgerOpenAtom } from "../../atoms/atoms";
const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useRecoilState(hamburgerOpenAtom);
  return (
    <div
      className="shadow-inner  shadow-black flex  glass justify-between h-16 items-center sticky z-10 
      "
    >
      <div className="pl-10 ">
        <Logo />
      </div>
      <div className=" hidden md:block pr-10">
        <Navlinks />
      </div>
      <div
        className="md:hidden text-2xl pr-7 "
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        {!hamburgerOpen && <GiHamburgerMenu />}
      </div>
    </div>
  );
};

export default Navbar;
