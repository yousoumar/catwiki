import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Breed.scss";
export default function Breed() {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);
  const [images, setImages] = useState(null);
  console.log(breed);
  useEffect(() => {
    fetch("/cats/" + id)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
        setBreed(data.breed);
      });
  }, [id]);

  const displayGraphic = (n) => {
    const array = [1, 2, 3, 4, 5];
    return (
      <div>
        {array.map((item) => {
          if (item <= n) {
            return <span className="plein"></span>;
          } else return <span></span>;
        })}
      </div>
    );
  };
  return (
    <div className="breed">
      {!breed ? (
        <Loader />
      ) : (
        <>
          <div className="left">
            <img src={images[0]} alt="" />
          </div>
          <div className="right">
            <div className="img">
              <h1>{breed.name}</h1>
            </div>
            <div>{breed.description}</div>
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
              {breed.life_span + " years"}
            </p>
            <p>
              <strong>Adaptability : </strong>
              {displayGraphic(breed.adaptability)}
            </p>
            <p>
              <strong>Affection level : </strong>
              {displayGraphic(breed.affection_level)}
            </p>
            <p>
              <strong>Child friendly : </strong>
              {displayGraphic(breed.child_friendly)}
            </p>
            <p>
              <strong>Grooming : </strong>
              {displayGraphic(breed.grooming)}
            </p>
            <p>
              <strong>Intelligence : </strong>
              {displayGraphic(breed.intelligence)}
            </p>
            <p>
              <strong>Health issues : </strong>
              {displayGraphic(breed.health_issues)}
            </p>
            <p>
              <strong>Social needs : </strong>
              {displayGraphic(breed.social_needs)}
            </p>
            <p>
              <strong>Stranger friendly : </strong>
              {displayGraphic(breed.stranger_friendly)}
            </p>
          </div>
          <div className="bottom">
            <h1>Other photos</h1>
            <div className="content">
              {images.slice(1).map((img) => (
                <div className="img" key={img.url}>
                  {" "}
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
