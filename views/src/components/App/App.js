import "./App.scss";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
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
      <Header />
      <Hero summaryBreeds={summaryBreeds} breedsNumber={breedsNumber} />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
