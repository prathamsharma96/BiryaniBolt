import { useState } from "react";
import dummyMenu from "../utils/dummyMenu";

/**
 * Restaurant Menu with Accordion (Tailwind)
 */

const RestaurantMenu = () => {
  const categoryCards =
    dummyMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Restaurant Header */}
      <div className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">🍔 Burger King</h1>
        <p className="mt-1 text-sm text-gray-500">
          Fast Food • Burgers • Beverages
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {categoryCards.map((category, index) => {
          const { title, itemCards } = category.card.card;
          const isOpen = index === openIndex;

          return (
            <div
              key={title}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {title} ({itemCards.length})
                </h2>

                <span className="text-xl">{isOpen ? "⬆️" : "⬇️"}</span>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="divide-y">
                  {itemCards.map((item) => {
                    const info = item.card.info;

                    return (
                      <div
                        key={info.id}
                        className="flex justify-between gap-4 px-5 py-4"
                      >
                        {/* Left */}
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">
                            {info.name}
                          </h3>

                          <p className="mt-1 text-sm font-semibold text-gray-700">
                            ₹{(info.price || info.defaultPrice) / 100}
                          </p>

                          {info.isBestseller && (
                            <span className="mt-1 inline-block text-xs font-semibold text-orange-600">
                              🔥 Bestseller
                            </span>
                          )}

                          {info.description && (
                            <p className="mt-2 text-sm text-gray-500">
                              {info.description}
                            </p>
                          )}
                        </div>

                        {/* Right */}
                        <div className="flex items-center">
                          <button className="rounded-lg border border-green-600 px-4 py-1.5 text-sm font-semibold text-green-600 hover:bg-green-50">
                            ADD
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
