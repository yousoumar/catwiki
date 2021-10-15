import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBox.scss";
export default function SearchBox({ allBreeds, setShowSearchBox }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="serach-box">
      <div className="content">
        <button className="close" onClick={(e) => setShowSearchBox(false)}>
          X
        </button>
        <input
          type="search"
          placeholder="Enter breed name"
          onInput={(e) => setInputValue(e.currentTarget.value)}
        />
        <div className="links">
          {inputValue.trim().length > 1 &&
            allBreeds
              .filter((breed) => breed.name.includes(inputValue))
              .map((breed) => (
                <Link to={"/breed/" + breed.id}>{breed.name}</Link>
              ))}
        </div>
      </div>
    </div>
  );
}
