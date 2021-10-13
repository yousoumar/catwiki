import "./Header.scss";
import logo from "../../assets/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
    </header>
  );
}
