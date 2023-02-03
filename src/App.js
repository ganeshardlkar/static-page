import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from './components/Footer';
import CardsSection from "./components/CardsSection";
import TopSellers from "./components/TopSellers";

function App() {
  return (
    <div>

      <Header />
      <Hero/>
      <TopSellers />
      <CardsSection />
      <Footer/>
    </div>
  );
}

export default App;
