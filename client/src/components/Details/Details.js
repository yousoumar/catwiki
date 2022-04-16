import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import "./Details.scss";
export default function Breed({ allBreeds }) {
  const { id } = useParams();
  const breed = allBreeds.find((breed) => breed.id === id);
  const [images, setImages] = useState(null);
  const [apiError, setApiError] = useState(null);
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("/cats/" + id);
        const data = await res.json();
        if (res.ok) {
          setImages(data);
        } else {
          setApiError(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, [id]);

  const displayGraphic = (n) => {
    const array = [1, 2, 3, 4, 5];
    return (
      <div>
        {array.map((item) => {
          if (item <= n) {
            return <span className="plein" key={item}></span>;
          } else return <span key={item}></span>;
        })}
      </div>
    );
  };
  return (
    <>
      {apiError ? (
        <Error error={apiError} />
      ) : (
        <div className="breed">
          {!images ? (
            <Loader />
          ) : (
            <>
              <div className="left img">
                <img src={breed.image.url} alt="" />
              </div>
              <div className="right">
                <h1>{breed.name}</h1>

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
                  {images.map((img) => (
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
      )}
    </>
  );
}
