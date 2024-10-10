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
        const res = await fetch("/api/cats/" + id);
        const data = await res.json();
        if (res.ok) {
          setImages(data);
        } else {
          setApiError(data.message);
        }
      } catch (error) {
        setApiError("Something went wrong with The Cat Api. Please come back later.");
      }
    };
    fetcher();
  }, [id]);

  const displayGraphic = (n) => {
    const array = [1, 2, 3, 4, 5];
    return (
      <div>
        {array.map((item, index) => {
          if (item <= n) {
            return <span className="plein" key={index}></span>;
          } else return <span key={index}></span>;
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

                <p>{breed.description}</p>
                <div>
                  <strong>Temperament : </strong>
                  {breed.temperament}
                </div>
                <div>
                  <strong>Origin : </strong>
                  {breed.origin}
                </div>
                <div>
                  <strong>Life Span : </strong>
                  {breed.life_span + " years"}
                </div>
                <div>
                  <strong>Adaptability : </strong>
                  {displayGraphic(breed.adaptability)}
                </div>
                <div>
                  <strong>Affection level : </strong>
                  {displayGraphic(breed.affection_level)}
                </div>
                <div>
                  <strong>Child friendly : </strong>
                  {displayGraphic(breed.child_friendly)}
                </div>
                <div>
                  <strong>Grooming : </strong>
                  {displayGraphic(breed.grooming)}
                </div>
                <div>
                  <strong>Intelligence : </strong>
                  {displayGraphic(breed.intelligence)}
                </div>
                <div>
                  <strong>Health issues : </strong>
                  {displayGraphic(breed.health_issues)}
                </div>
                <div>
                  <strong>Social needs : </strong>
                  {displayGraphic(breed.social_needs)}
                </div>
                <div>
                  <strong>Stranger friendly : </strong>
                  {displayGraphic(breed.stranger_friendly)}
                </div>
              </div>
              <div className="bottom">
                <h1>Other photos</h1>
                <div className="content">
                  {images.map((img, index) => (
                    <div className="img" key={index}>
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
