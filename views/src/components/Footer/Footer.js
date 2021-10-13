import whiteLogo from "../../assets/white-logo.svg";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={whiteLogo} alt="" />
      </div>
      <div>
        &copy; created by <a href="https://github.com/yousoumar">yousoumar</a>
      </div>
    </footer>
  );
}
