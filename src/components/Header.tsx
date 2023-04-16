import { BellIcon, ChevronsRightIcon, SearchIcon } from "lucide-react";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-center h-20 px-6 border-b-2 border-gray-5">
      <div className="flex">
        <ChevronsRightIcon className="text-gray-3 h-6" />
        <span className="font-normal text-gray-3">
          {new Date().toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
      <div className="flex flex-1 justify-end items-center gap-10">
        <BellIcon className="text-gray-1" />
        <div className="flex items-center focus-within:outline outline-2 outline-gray-3 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Search here"
            className="w-80 h-12 px-6 bg-white rounded-l-xl font-normal text-secundary placeholder-gray-3 outline-none transition-all focus-visible:w-96"
          />
          <button type="submit" className="h-12 px-6 bg-white rounded-r-xl">
            <SearchIcon className="text-secundary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
