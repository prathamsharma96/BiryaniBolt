const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img
          className="h-48 w-full object-cover"
          src={
            cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
              : "https://via.placeholder.com/660x400?text=No+Image"
          }
          alt={name}
        />

        {/* Rating badge */}
        <span
          className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-sm font-semibold text-white ${
            avgRating >= 4 ? "bg-green-600" : "bg-orange-500"
          }`}
        >
          ⭐ {avgRating}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="truncate text-lg font-bold text-gray-800">{name}</h3>

        <p className="mt-1 text-sm text-gray-500 truncate">
          {cuisines.join(", ")}
        </p>

        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <span>{costForTwo}</span>
          <span>⏱ {sla?.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
