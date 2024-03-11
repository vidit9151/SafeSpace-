import Logo from "../../assets/logo-min.png";
import FooterColumns from "./FooterColumns";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <div className="glass p-4 mt-7 relative bottom-0">
      <div className="flex justify-center p-5">
        <img src={Logo} className="w-28" alt="" />
      </div>

      <FooterColumns />
      <FooterCopyright />
    </div>
  );
};

export default Footer;
