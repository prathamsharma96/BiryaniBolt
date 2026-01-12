const dummyMenu = {
  data: {
    cards: [
      {},
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Burgers",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101",
                              name: "Classic Veg Burger",
                              category: "Burgers",
                              price: 8900,
                              description:
                                "Crispy veg patty with lettuce and mayo",
                              imageId: "veg_burger",
                              isVeg: 1,
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                },
                              },
                            },
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "102",
                              name: "Chicken Whopper",
                              category: "Burgers",
                              price: 12900,
                              description:
                                "Flame grilled chicken patty with sauces",
                              imageId: "chicken_burger",
                              isVeg: 0,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Sides & Snacks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "201",
                              name: "French Fries",
                              category: "Sides & Snacks",
                              price: 6900,
                              description: "Golden crispy fries",
                              isVeg: 1,
                            },
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "202",
                              name: "Chicken Nuggets",
                              category: "Sides & Snacks",
                              price: 9900,
                              description: "Crunchy chicken nuggets",
                              isVeg: 0,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Beverages",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "301",
                              name: "Coke",
                              category: "Beverages",
                              price: 4500,
                              description: "Chilled soft drink",
                              isVeg: 1,
                            },
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "302",
                              name: "Chocolate Shake",
                              category: "Beverages",
                              price: 7500,
                              description: "Rich chocolate milkshake",
                              isVeg: 1,
                              isBestseller: true,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

export default dummyMenu;
