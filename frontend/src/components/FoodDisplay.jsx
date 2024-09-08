import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa6";

const FoodDisplay = ({ category }) => {
  const { food_list, searchQuery } = useContext(StoreContext);

  const filteredFoodList = food_list.filter((item) => {
    return (
      (category === "All" || category === item.category) &&
      (searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="mt-8">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-neutral-200">
        Find our best dishes
      </h1>

      {filteredFoodList.length > 0 ? (
        <div
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
          className="grid mt-8 gap-8 gap-y-12"
        >
          {filteredFoodList.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] mt-12">
          <FaUtensils className="text-6xl text-neutral-400 mb-6" />
          <h2 className="text-3xl dark:text-neutral-200 font-semibold text-neutral-600 text-center">
            No dishes found
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mt-4 text-center">
            We couldn't find any dishes matching your search.
          </p>
          <a
            href="/"
            className="mt-8 px-8 py-3 bg-orange-500 text-neutral-200 rounded-full text-lg transition hover:bg-orange-600"
          >
            Browse Menu
          </a>
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
