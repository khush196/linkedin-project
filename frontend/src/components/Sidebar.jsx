import React, { useState } from 'react';
import '../styles/Sidebar.css'; 

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleCollapse} className="collapse-button">
        {isCollapsed ? '>' : '<'}
      </button>
      <nav>
        <ul>
          <li><a href="#">Resume Enhancer</a></li>
          <li><a href="#">Email Writing</a></li>
          <li><a href="#">Cover Letter Writing</a></li>
          <li><a href="#">Saved History</a></li>
          <li><a href="#">User Profile</a></li>
          {/* Add more features here */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;