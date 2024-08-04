import React from 'react'
import {menu_list} from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-neutral-200">
        Explore our menu
      </h1>
      <p className="max-w-[80%] md:max-w-[70%] text-sm md:text-md xl:text-lg dark:text-neutral-200">
      At SpiceRoute, our menu is a journey through the rich and diverse flavors of global cuisine. From the vibrant spices of Asia to the hearty classics of Europe, each dish is crafted with passion and the finest ingredients. Whether you're craving something familiar or eager to try something new, our menu has something for every palate.
      </p>
      <div className="flex justify-between items-center gap-8 text-center my-4 overflow-x-auto">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
          >
            <img
              className={`w-[8vw] min-w-24 cursor-pointer rounded-full ${
                category === item.menu_name
                  ? "border-4 border-orange-500"
                  : "border-2 border-transparent"
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <h2
              style={{ fontSize: "max(1.3vw, 16px)" }}
              className={`mt-2 mb-4 cursor-pointer dark:text-neutral-200 ${
                category === item.menu_name
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              {item.menu_name}
            </h2>
          </div>
        ))}
      </div>
      <hr className="my-4 h-1 bg-neutral-200 dark:bg-neutral-800 border-none" />
    </div>
  );
};

export default ExploreMenu