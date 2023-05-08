import Navbar from "./components/Navbar"
import PageHeader from "./assets/images/expertHeader.png"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <img class='page-header' src={PageHeader} alt='' width={"100%"} />
      <FeatureSection />
      <Footer/>
    </>
  );
}

export default App;
