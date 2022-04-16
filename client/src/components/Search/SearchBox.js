import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBox.scss";
export default function SearchBox({ allBreeds, setShowSearchBox }) {
  const [matchedBreeds, setMatchedBreeds] = useState([]);
  const handleInput = (e) => {
    const value = e.currentTarget.value.trim();
    if (value.length >= 1) {
      setMatchedBreeds(allBreeds.filter((breed) => breed.name.includes(value)));
    } else {
      setMatchedBreeds([]);
    }
  };

  return (
    <div className="serach-box">
      <div className="content">
        <button className="close" onClick={(e) => setShowSearchBox(false)}>
          X
        </button>
        <input
          type="text"
          placeholder="Enter breed name"
          onInput={handleInput}
        />
        <hr />
        <h1>Breed that match your search</h1>
        <div className="links">
          {matchedBreeds.length >= 1 ? (
            matchedBreeds.map((breed) => (
              <Link to={"/breed/" + breed.id} key={breed.name}>
                {breed.name}
              </Link>
            ))
          ) : (
            <p>No one matches your search</p>
          )}
        </div>
      </div>
    </div>
  );
}
