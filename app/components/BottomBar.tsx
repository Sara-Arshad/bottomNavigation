"use client";

import React, { useState } from "react";

const Navigation = () => {
  const Menus = [
    {
      name: "Home",
      icon: "home-outline",
      dis: "translate-x-0 translate-x-custom-1 ",
    },
    {
      name: "Profile",
      icon: "person-outline",
      dis: "translate-x-custom-2 ",
    },
    {
      name: "Message",
      icon: "chatbubble-outline",
      dis: "translate-x-custom-3 ",
    },
    {
      name: "Photos",
      icon: "camera-outline",
      dis: "translate-x-custom-4 ",
    },
    {
      name: "Settings",
      icon: "settings-outline",
      dis: "translate-x-custom-5 ",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-gray-200 flex justify-center max-h-[4rem] gap-2 sm:gap-4 md:gap-5 lg:gap-6 max-w-full w-full mx-auto px-3 sm:px-5 md:px-8 lg:px-10 rounded-t-xl">
      <ul className="flex relative w-full justify-between sm:justify-between lg:justify-between">
        {/* Active Highlight */}
        <span
          className={`bg-orange-600 duration-200   ${Menus[active].dis} border-8 border-white h-[60px] w-[65px] absolute -top-6 rounded-full`}
        >
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
        </span>

        {Menus.map((menu, i) => (
          <li key={i} className="w-16 flex-shrink-0">
            <a
              className="flex flex-col text-center pt-[21px] cursor-pointer"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-[25px] duration-300 ${
                  i === active && "-mt-[33px] text-white text-[26px]"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={`text-sm sm:text-md ${
                  active === i
                    ? "translate-y-4 duration-200 opacity-100 font-semibold text-black px-1 rounded-lg"
                    : "opacity-0 translate-y-10 "
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
