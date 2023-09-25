import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const SideBar = () => {
  return (
    // <Router> qawpew-miFfo9-kovsir
    <div className="bg-white text-gray-800 min-w-fit min-h-fit border-r broder-gray-300 border-b flex flex-col">
      <div className="px-4 py-4 space-x-4 flex justify-start border border-b-gray-300">
        <h5 className="">Search</h5>
        <h5 className="">Saved searches</h5>
      </div>
      <div className="">
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-2 top-4 text-black-300"
          />
          <input
            type="text"
            placeholder="Search People..."
            className="w-full border py-3 px-8 text-black border-b-gray-300"
          />
        </div>
      </div>
      <div className="px-4 pt-4 flex justify-between border-b border-gray-300 py-4">
        <h1 className="font-semibold">Filters</h1>
        <h6 className="font-normal text-blue-600">Save</h6>
      </div>
      {/* Secondary nav */}
      <nav className="mt-4 overflow-y-scroll h-[500px] flex-grow">
        <ul className="">
          <li className="w-full border-b border-gray-300 px-2 pb-4">
            <Link to="#" className=" text-black ">
              Lists
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Persona
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Name
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Job Titles
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Company
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Location
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Employees
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Industry Keywords
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Buying Intent
            </Link>
          </li>
          <li className="w-full border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Email Status
            </Link>
          </li>
          <li className="w-full bg-gray-100 border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Score
            </Link>
          </li>
          <li className="w-full bg-gray-100 border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Technology
            </Link>
          </li>
          <li className="w-full bg-gray-100 border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Revenue
            </Link>
          </li>
          <li className="w-full bg-gray-100 border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Funding
            </Link>
          </li>
          <li className="w-full bg-gray-100 border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Job Postings
            </Link>
          </li>
          <li className="w-full  border-b border-gray-300 px-2 py-4">
            <Link to="#" className=" text-black ">
              Signals
            </Link>
          </li>
        </ul>
      </nav>
      <div className="px-4 pt-4 w-full justify-center align-middle border-b border-gray-300 py-4 flex-grow">
        <button className="w-full bg-blue-600 px-8 py-2 text-white font-bold rounded-md">
          More Filters
        </button>
      </div>
    </div>
    // </Router>
  );
};
