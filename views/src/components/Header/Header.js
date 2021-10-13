import "./Header.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
    </header>
  );
}
