import { IoCloseSharp } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { menuLinksArr } from "../../links/MenuLinks.data";
import { hamburgerOpenAtom } from "../../atoms/atoms";

const MobTabNav = () => {
  const setHamburgerOpen = useSetRecoilState(hamburgerOpenAtom);
  return (
    <div className="bg-white glass   mt-2 mx-2 text-center px-4 pb-4 rounded-tl-2xl w-[50vw] h-[100vh] fixed top-0 right-0 z-10  ">
      <div
        className="absolute right-3 top-3 text-4xl"
        onClick={() => setHamburgerOpen(false)}
      >
        <IoCloseSharp />
      </div>
      <div className=" flex pt-20 justify-start flex-col  h-[100vh] gap-3 items-center font-semibold">
        {menuLinksArr.map(({ id, title, to }) => (
          <div key={id} className="hover:scale-105   ">
            <Link to={to}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobTabNav;
