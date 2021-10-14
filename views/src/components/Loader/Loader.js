import "./Loader.scss";
import logo from "../../assets/logo.svg";
export default function Loader() {
  return (
    <div className="loader">
      <div className="inner">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
