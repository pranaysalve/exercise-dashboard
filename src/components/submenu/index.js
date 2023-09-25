import { BrowserRouter as Router, Link } from "react-router-dom";
const SubMenuSearch = () => {
  return (
    <div className="flex bg-white p-4 border-b border-b-gray-300  ">
      <div className="container flex justify-stretch">
        {/* <Router> */}
        <div>
          <nav className="flex justify-items-start  items-center">
            <ul className="flex space-x-4">
              <li className="flex space-x-2 hover:text-blue-600">
                <Link to="#" className=" color-bm-1 font-normal text-blue-600">
                  People
                </Link>
              </li>
              <li className="flex space-x-2 hover:text-blue-600">
                <Link to="#" className=" color-bm-1 font-normal text-gray-700">
                  Companies
                </Link>
              </li>
              <li className="flex space-x-2 hover:text-blue-600">
                <Link to="#" className=" color-bm-1 font-normal text-gray-700">
                  List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* </Router> */}
      </div>
    </div>
  );
};

export default SubMenuSearch;
