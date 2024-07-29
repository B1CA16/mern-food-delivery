import React from 'react'
import {menu_list} from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-2xl md:text-3xl font-bold dark:text-neutral-200">
        Explore our menu
      </h1>
      <p className="max-w-[80%] md:max-w-[60%] text-sm md:text-md dark:text-neutral-200">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
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
              className={`w-[7.5vw] min-w-20 cursor-pointer rounded-full ${
                category === item.menu_name
                  ? "border-4 border-orange-500"
                  : "border-2 border-transparent"
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <h2
              style={{ fontSize: "max(1.4vw, 16px)" }}
              className="mt-2 mb-4 cursor-pointer dark:text-neutral-200"
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