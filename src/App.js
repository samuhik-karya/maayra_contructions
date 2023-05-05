import Navbar from "./components/Navbar"
import PageHeader from "./assets/images/expertHeader.png"
import SpecializationSection from "./components/SpecializationSection"

function App() {
  return (
    <>
      <Navbar />
      <img src={PageHeader} alt='' width={"100%"} />
      <SpecializationSection />
    </>
  );
}

export default App;
