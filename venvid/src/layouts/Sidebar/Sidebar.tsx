import React from 'react';
import styles from './Sidebar.module.css';
import SidebarItem from './SidebarItem';

import {
  MdHome,
  MdWhatshot,
  MdHistory,
  MdPlaylistPlay,
  MdVideoLibrary,
  MdWatchLater,
  MdThumbUp,
} from 'react-icons/md';

const sidebarItems = [
  { title: 'Home', icon: <MdHome /> },
  { title: 'Trending', icon: <MdWhatshot /> },
  { title: 'History', icon: <MdHistory /> },
  { title: 'Playlists', icon: <MdPlaylistPlay /> },
  { title: 'Your videos', icon: <MdVideoLibrary /> },
  { title: 'Watch later', icon: <MdWatchLater /> },
  { title: 'Liked videos', icon: <MdThumbUp /> },
];

const Sidebar: React.FC = () => {
  return (
    <aside className={`d-none d-md-block ${styles.sidebar}`}>
      <ul className="nav flex-column p-3">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            icon={item.icon}
            onClick={() => alert(`Clicked: ${item.title}`)}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
