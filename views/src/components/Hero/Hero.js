import search from "../../assets/search.svg";
import img2 from "../../assets/image2.png";
import "./Hero.scss";
export default function Hero() {
  return (
    <div className="hero">
      <div className="top">
        <div className="logo">CatWiki</div>
        <p>Get to know more about your cat breed</p>
        <div className="input">
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </div>
      </div>
      <div className="bottom">
        <h1>Most Searched Breeds</h1>
        <hr />
        <h2>
          66+ Breeds For you <br /> to discover
        </h2>
        <div className="summary">
          <div className="bread">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="name">Bengal</div>
          </div>
          <div className="bread">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="name">Bengal</div>
          </div>
          <div className="bread">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="name">Bengal</div>
          </div>
          <div className="bread">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="name">Bengal</div>
          </div>
        </div>
      </div>
    </div>
  );
}
