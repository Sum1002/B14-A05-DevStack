function StackSidebar({ stack, setStack }) {
  const handleRemove = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-600">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <p className="mt-6 text-sm leading-6 text-gray-500">
          Your stack is empty. Add technologies from the list.
        </p>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-9 w-9 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="text-lg text-gray-400 hover:text-red-500"
                  aria-label={`Remove ${item.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;
