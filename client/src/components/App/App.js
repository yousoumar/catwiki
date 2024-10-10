import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../Blog/Blog";
import Breed from "../Details/Details";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Loader from "../Loader/Loader";
import "./App.scss";
function App() {
  const [allBreeds, setallBreeds] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [summaryBreeds, setSummaryBreeds] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("/api/cats");
        const data = await res.json();
        if (res.ok) {
          setallBreeds(data);
          data.sort(
            (item1, item2) => item1.grooming * Math.random() < item2.adaptability * Math.random()
          );
          setSummaryBreeds(data.slice(0, 4));
        } else {
          setApiError(data.message);
        }
      } catch (error) {
        setApiError("Something went wrong with The Cat Api. Please come back later.");
      }
    };
    fetcher();
  }, []);
  return (
    <div className="app">
      {!apiError && summaryBreeds.length <= 0 ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Header />
          <main>
            {apiError ? (
              <Error error={apiError} />
            ) : (
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <>
                      <Hero summaryBreeds={summaryBreeds} allBreeds={allBreeds} />
                      <Blog />
                    </>
                  }
                />
                <Route path="/breed/:id" element={<Breed allBreeds={allBreeds} />} />
                <Route path="/*" element={<Error error={404} />} />
              </Routes>
            )}
          </main>

          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
