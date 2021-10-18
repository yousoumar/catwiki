import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import "./Blog.scss";
export default function Blog() {
  return (
    <div className="blog">
      <div className="left">
        <hr />
        <h1>Why should you have a cat?</h1>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
      </div>
      <div className="right">
        <div className="img">
          <img src={img1} alt="" />
        </div>
        <div className="img">
          <img src={img2} alt="" />
        </div>
        <div className="img">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
