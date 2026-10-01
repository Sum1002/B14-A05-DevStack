import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";

function App() {
  const [stack, setStack] = useState([]);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologyList
          stack={stack}
          setStack={setStack}
        />
      </main>
    </>
  );
}

export default App;