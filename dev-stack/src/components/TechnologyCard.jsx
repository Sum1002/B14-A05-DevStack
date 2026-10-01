function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div className="flex min-h-[330px] flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-lg font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-5 flex items-center justify-between text-xs">
        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
          {technology.category}
        </span>

        <span className="text-gray-500">{technology.difficulty}</span>

        <span className="font-medium text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-3 text-sm font-medium text-white transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-400"
            : "bg-gray-950 hover:bg-gray-800"
        }`}
        onClick={() => onAdd(technology)}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;
