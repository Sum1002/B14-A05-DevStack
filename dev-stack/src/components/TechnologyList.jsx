import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

function TechnologyList({ stack, setStack }) {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleAddToStack = (technology) => {
  const alreadyAdded = stack.some((item) => item.id === technology.id);

  if (alreadyAdded) {
    return;
  }

  setStack([...stack, technology]);
  console.log("Added:", technology.name);
};
  useEffect(() => {
    fetch("public/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading technologies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="technologies" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore the{" "}
            <span className="brand-gradient-text">Technologies</span>
          </h2>

          <p className="mt-2 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

              <p className="text-sm text-gray-500">Loading technologies...</p>
            </div>
          </div>
        ) : (
          /* Technology Grid */
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAddToStack}
              />
          ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TechnologyList;
