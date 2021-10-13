import "./App.scss";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
