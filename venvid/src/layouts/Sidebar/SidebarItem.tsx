import React from 'react';

interface SidebarItemProps {
  title: string;
  icon: React.ReactElement;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon, onClick }) => {
  return (
    <li className="nav-item mb-2">
      <button
        className="nav-link text-start btn btn-link w-100 text-dark d-flex align-items-center"
        onClick={onClick}
        style={{ textDecoration: 'none' }}
      >
        <span className="me-2" style={{ fontSize: '1.2rem' }}>{icon}</span>
        {title}
      </button>
    </li>
  );
};

export default SidebarItem;
