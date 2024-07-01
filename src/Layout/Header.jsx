import logo from "../assets/highlight.png";
import { RiHeartLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <ul className="menu">
        <li>HOME</li>
        <li>SHOP</li>
        <li>GALLERY</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
      </ul>
      <div className="profile">
      <RiHeartLine size={28}/>
      <AiOutlineShoppingCart size={28}/>
      <CgProfile size={28}/>
      </div>
    </div>
  );
}

export default Header;
