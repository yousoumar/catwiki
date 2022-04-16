import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/white-logo.svg";
import Search from "../Search/SearchBox";
import arrow from "../../assets/arrow.svg";
import "./Hero.scss";
export default function Hero({ summaryBreeds, breedsNumber, allBreeds }) {
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <div className="hero">
      {showSearchBox && (
        <Search allBreeds={allBreeds} setShowSearchBox={setShowSearchBox} />
      )}
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p>Get to know more about your cat breed</p>
        <button onClick={(e) => setShowSearchBox(true)}>
          <span>Serach</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#291507"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="bottom">
        <hr />
        <h1>
          {allBreeds.length} Breeds For you <br /> to discover
        </h1>
        <div className="summary">
          {summaryBreeds.map((breed) => (
            <Link to={`/breed/${breed.id}`} className="breed" key={breed.name}>
              <div className="img">
                <img src={breed.image.url} alt="" />
              </div>
              <div className="name">{breed.name}</div>
            </Link>
          ))}
        </div>
        <a
          href="/"
          className="see-more"
          onClick={(e) => {
            e.preventDefault();
            setShowSearchBox(true);
          }}
        >
          <span>See more</span>{" "}
          <span className="icon">
            <img src={arrow} alt="" />
          </span>
        </a>
      </div>
    </div>
  );
}
