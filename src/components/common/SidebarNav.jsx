import React from 'react';
import { Link } from 'gatsby';

const SidebarNav = ({ navList }) => {
  return (
    <div className="sidebar-nav">
      <ul>
        {navList.map((item) => (
          <li key={item.name}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;
