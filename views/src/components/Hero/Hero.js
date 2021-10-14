import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import "./Hero.scss";
export default function Hero({ summaryBreeds, breedsNumber }) {
  console.log(summaryBreeds);
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
        <hr />
        <h1>
          {breedsNumber} Breeds For you <br /> to discover
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
      </div>
    </div>
  );
}
