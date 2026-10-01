import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TechnologyList />
      </main>
    </>
  );
}

export default App;