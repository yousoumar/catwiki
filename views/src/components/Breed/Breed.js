import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Breed.scss";
export default function Breed() {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);
  console.log(id);
  console.log(breed);
  useEffect(() => {
    fetch("/cats/" + id)
      .then((res) => res.json())
      .then((breed) => setBreed(breed));
  }, []);
  return (
    <div className="breed">
      {!breed ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="left">
            <img src={breed.image.url} alt="" />
          </div>
          <div className="right">
            <div className="img">
              <h1>{breed.name}</h1>
            </div>
            <p>{breed.description}</p>
            <p>
              <strong>Temperament : </strong>
              {breed.temperament}
            </p>
            <p>
              <strong>Origin : </strong>
              {breed.origin}
            </p>
            <p>
              <strong>Life Span : </strong>
              {breed.life_span} years
            </p>
          </div>
        </>
      )}
    </div>
  );
}
