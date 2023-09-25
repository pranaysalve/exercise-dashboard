import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faLocationArrow,
  faBookmark,
  faLeaf,
  faBolt,
  faPhone,
  faBell,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../dashboard";
import SearchPage from "../../pages/search";
import EngagePage from "../../pages/engage";
import EnrichPage from "../../pages/enrich";
import PlayPage from "../../pages/play";
import ConversationPage from "../../pages/conversation";
import Dropdown from "../dropdown";

const DropdownOption = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const TopMenuBar = ({ setIsVisible, isVisible }) => {
  const path = useLocation();

  useEffect(() => {
    if (!isVisible && path.pathname === "/search") {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);
  }, [path.pathname]);

  return (
    <>
      <div className="flex bg-white p-4 border-b border-b-gray-300 h-auto ">
        <div className="flex container">
          {/* <Router> */}
          <div className="flex justify-items-start">
            <nav className="flex justify-items-start  items-center">
              <div className="mr-10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6005 5.67333H15.5361L17.1251 8.39682L18.6005 5.67333Z"
                    fill="black"
                  />
                  <path
                    d="M22.8593 21.047L11.9811 2.94984L1.13919 21.0091H6.94593C7.72069 21.0091 8.48283 20.8135 9.1566 20.4427C9.88402 20.0419 10.4331 19.4612 10.8623 18.7574C11.3641 17.9338 11.8517 17.1006 12.3456 16.2722L13.6095 14.1515L11.9795 11.4201L11.2568 12.583C10.4331 13.9606 9.65364 15.3696 8.79999 16.7282C8.3708 17.4099 7.81063 18.0537 6.9838 18.2194C6.85915 18.2446 6.73134 18.2572 6.60353 18.262C6.43311 18.2683 6.2627 18.2651 6.09386 18.2651L11.9811 8.23903L19.5409 21.047H22.8593Z"
                    fill="black"
                  />
                </svg>
              </div>
              <ul className="flex space-x-4">
                <li className="flex space-x-2 hover:text-blue-600">
                  <div>
                    <FontAwesomeIcon icon={faHouse} />
                  </div>
                  <div>
                    <Link to="/" className=" color-bm-1 font-semibold">
                      Home
                    </Link>
                  </div>
                </li>
                <li className="flex space-x-2 hover:text-blue-600">
                  <div>
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <div>
                    <Link
                      to="/search"
                      className=" color-bm-1 font-semibold"
                      // onClick={(e) => searchClickFun(e)}
                    >
                      Search
                    </Link>
                  </div>
                </li>
                <li className="flex space-x-2 hover:text-blue-600">
                  <div>
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </div>
                  <div>
                    <Link to="/engage" className=" color-bm-1 font-semibold ">
                      Engage
                    </Link>
                  </div>
                </li>
                <li className="flex space-x-2 hover:text-blue-600">
                  <div>
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                  <div>
                    <Link
                      to="/conversation"
                      className=" color-bm-1 font-semibold "
                    >
                      Conversation
                    </Link>
                  </div>
                </li>
                <li className="flex space-x-2 hover:text-blue-600">
                  <div>
                    <FontAwesomeIcon icon={faLeaf} />
                  </div>
                  <div>
                    <Link to="/enrich" className=" color-bm-1 font-semibold ">
                      Enrich
                    </Link>
                  </div>
                </li>
                <li className="flex space-x-2 hover:text-blue-600">
                  <div>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <div>
                    <Link to="/play" className=" color-bm-1 font-semibold ">
                      Play
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" flex justify-end">
            <nav className="flex">
              <ul className="flex space-x-3">
                <li>
                  <Dropdown options={DropdownOption} tag="Apollo Guide" />
                </li>
                <li>
                  <button className="bg-blue-600 px-5 py-2 font-semibold text-white rounded-full hover:bg-blue-800">
                    Upgrade
                  </button>
                </li>
                <li className="relative">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute left-3 top-3 text-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    className="border py-1 px-8 text-black hover:border-blue-600"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="hover:border-blue-600"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faBell}
                    className="hover:border-blue-600"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faGear}
                    className="hover:border-blue-600"
                  />
                </li>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" exact component={Dashboard} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/conversation" exact component={ConversationPage} />
            <Route path="/engage" exact component={EngagePage} />
            <Route path="/enrich" exact component={EnrichPage} />
            <Route path="/play" exact component={PlayPage} />
          </Routes>
          {/* </Router> */}
        </div>
      </div>
    </>
  );
};

export default TopMenuBar;
