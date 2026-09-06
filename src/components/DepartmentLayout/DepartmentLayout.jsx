import { useEffect, useState } from "react";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";

const DepartmentLayout = ({ department, children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sidebar appears after leaving the hero
      setShowSidebar(window.scrollY > window.innerHeight * 0.55);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`app ${showSidebar ? "sidebar-visible" : ""}`}>

      <Navbar />

      <Sidebar
        tabs={department.tabs}
        visible={showSidebar}
      />

      <main className="main-content">

        <Hero
          title={department.name}
          video={department.video}
        />

        <div className="department-content">
          {children}
        </div>

      </main>

    </div>
  );
};

export default DepartmentLayout;