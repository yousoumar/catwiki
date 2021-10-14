import "./App.scss";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Breed from "../Breed/Breed";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const [breedsNumber, setBreedsNumber] = useState(0);
  const [summaryBreeds, setSummaryBreeds] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("/cats/");
        const data = await res.json();
        setBreedsNumber(data.length);
        setSummaryBreeds(data.slice(0, 4));

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Hero summaryBreeds={summaryBreeds} breedsNumber={breedsNumber} />
            <Blog />
          </Route>
          <Route path="/breed/:id">
            <Breed />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
