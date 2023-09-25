import React, { useState } from "react";

import "./App.css";
import TopMenuBar from "./components/TopMenu";
import Dashboard from "./components/dashboard";
import { SideBar } from "./components/sidebar";
import SubMenuSearch from "./components/submenu";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="min-h-screen">
      <TopMenuBar setIsVisible={setIsVisible} isVisible={isVisible} />
      {isVisible && <SubMenuSearch />}
      <div className="flex overflow-hidden">
        {isVisible && <SideBar />}
        <div className="flex flex-col flex-grow min-h-fit">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
