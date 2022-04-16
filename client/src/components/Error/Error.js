import "./Error.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import img3 from "../../assets/image3.png";
export default function Error({ error }) {
  return (
    <div className="error">
      {error === 404 ? (
        <>
          <div className="left">
            <hr />
            <h1>Got lost finding your cat ? </h1>
            <p>
              The page you are looking for might be removed or is temporarily
              unavailible.
            </p>

            <Link to="/" className="see-more">
              <span>Back to home</span>{" "}
              <span className="icon">
                <img src={arrow} alt="" />
              </span>
            </Link>
          </div>

          <div className="right">
            <img src={img3} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="left">
            <hr />
            <h1>Sorry we couldn't offer you a better service</h1>
            <p>{error}</p>
          </div>
          <div className="right">
            <img src={img3} alt="" />
          </div>
        </>
      )}
    </div>
  );
}
