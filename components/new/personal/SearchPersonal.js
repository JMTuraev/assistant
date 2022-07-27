import { SearchIcon } from "@heroicons/react/solid";
import React, {useState} from "react";
import NewPesonal from "./NewPersonal";

export default function SearchPersonal({setShow, show}) {

    return (
   
    <div className="grid grid-cols-12 mb-4 gap-2 items-center  ">
    <div className="col-span-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        id="search"
        name="search"
        className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Search"
        type="search"
      />


    </div>
    <div className="col-span-2">
    <div
    onClick={()=>setShow(!show)}
    className="cursor-pointer ml-6 inline-flex items-center mr-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    Новый персонал
  </div>
  </div>
  </div>

  );
}
