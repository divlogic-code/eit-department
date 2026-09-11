import "./Sidebar.css";

const Sidebar = ({ tabs = [], visible }) => {
  return (
    <aside className={`sidebar ${visible ? "sidebar-show" : ""}`}>

      <div className="sidebar-label">
        EIT NAVIGATION
      </div>

      {tabs.map((tab, index) => (
        <a
          key={tab}
          href={`#section-${index}`}
          className={`sidebar-link ${
            index === 0 ? "active" : ""
          }`}
        >
          <span className="sidebar-number">
            0{index + 1}
          </span>

          <span>
            {tab}
          </span>
        </a>
      ))}

    </aside>
  );
};

export default Sidebar;