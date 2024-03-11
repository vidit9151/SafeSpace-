import { Link } from "react-router-dom";
import { menuLinksArr } from "../../links/MenuLinks.data";

const Navlinks = () => {
  return (
    <div className="flex gap-5">
      {menuLinksArr.map(({ id, to, title }) => (
        <div key={id}>
          <Link to={to}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
