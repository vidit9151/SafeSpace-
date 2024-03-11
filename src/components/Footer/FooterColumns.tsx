import FooterCol1 from "./FooterCol1";
import FooterCol2 from "./FooterCol2";

const FooterColumns = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10">
      <FooterCol1 />
      <FooterCol2 />
    </div>
  );
};

export default FooterColumns;
