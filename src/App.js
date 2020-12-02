import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SidebarContext from './Context/sidebarContext';

function App() {
  const [sidebarState, setSidebarState] = useState(true);

  const toggleSidebar = () => {
    const stateSidebar = !sidebarState;
    setSidebarState(stateSidebar);
  };

  return (
    <div className="app">
      <SidebarContext.Provider value={{sidebarOpen:sidebarState}}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="app__page">
          <Sidebar />
          <RecommendedVideos />
        </div>
      </SidebarContext.Provider>
    </div>
  );
}

export default App;
