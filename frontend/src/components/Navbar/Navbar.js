import { Link } from "react-router-dom";
import logo from "./mocklogo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
};

export default Navbar;
