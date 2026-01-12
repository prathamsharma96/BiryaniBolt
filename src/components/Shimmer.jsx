const Shimmer = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl bg-white shadow-md"
          >
            {/* Image skeleton */}
            <div className="h-48 w-full animate-pulse bg-gray-300" />

            {/* Content skeleton */}
            <div className="space-y-3 p-4">
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300" />
              <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-gray-200" />

              <div className="mt-4 flex justify-between">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
