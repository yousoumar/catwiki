import "./App.scss";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Breed from "../Details/Details";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
function App() {
  const [allBreeds, setallBreeds] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [summaryBreeds, setSummaryBreeds] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("/cats/");
        const data = await res.json();
        if (res.ok) {
          setallBreeds(data);
          data.sort(
            (item1, item2) =>
              item1.grooming * Math.random() <
              item2.adaptability * Math.random()
          );
          setSummaryBreeds(data.slice(0, 4));
        } else {
          setApiError(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, []);
  return (
    <div className="app">
      {apiError ? (
        <BrowserRouter>
          <Header />
          <main>
            <Error error={apiError} />
          </main>

          <Footer />
        </BrowserRouter>
      ) : (
        <>
          {summaryBreeds.length <= 0 ? (
            <Loader />
          ) : (
            <BrowserRouter>
              <Header />
              <main>
                <Switch>
                  <Route exact path="/">
                    <Hero summaryBreeds={summaryBreeds} allBreeds={allBreeds} />
                    <Blog />
                  </Route>
                  <Route path="/breed/:id">
                    <Breed allBreeds={allBreeds} />
                  </Route>
                  <Route path="/*">
                    <Error error={404} />
                  </Route>
                </Switch>
              </main>

              <Footer />
            </BrowserRouter>
          )}
        </>
      )}
    </div>
  );
}

export default App;
