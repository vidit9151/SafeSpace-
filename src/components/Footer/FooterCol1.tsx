import { Link } from "react-router-dom";
import { menuLinksArr } from "../../links/MenuLinks.data";

const FooterCol1 = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl">Links</h1>
      <br />
      {menuLinksArr.map(({ id, title, to }) => {
        return (
          <div key={id}>
            <Link to={to}>
              <p className="font-light">{title}</p>
            </Link>
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default FooterCol1;
