import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SidebarContext from "../../Context/sidebarContext";

const Sidebar = (props) => {
  const sidebarContext = useContext(SidebarContext);

  const sidebarContentTop = [
    { title: "Home", icon: HomeIcon, selected: true },
    { title: "Trending", icon: WhatshotIcon },
    { title: "Subscriptions", icon: SubscriptionsIcon },
  ];

  const sidebarContentBot = [
    { title: "Library", icon: VideoLibraryIcon },
    { title: "History", icon: HistoryIcon },
    { title: "Your videos", icon: SlideshowIcon },
    { title: "Watch later", icon: WatchLaterIcon },
    { title: "Liked videos", icon: ThumbUpIcon },
    { title: "Show more", icon: ExpandMoreOutlinedIcon },
  ];

  const sidebarContentMin = [
    { title: "Home", icon: HomeIcon, selected: true },
    { title: "Trending", icon: WhatshotIcon },
    { title: "Subscriptions", icon: SubscriptionsIcon },
    { title: "Library", icon: VideoLibraryIcon },
  ];

  let sidebar;
  if (!sidebarContext.sidebarOpen) {
    sidebar = (
      <div className="sidebar min">
        {sidebarContentMin.map((content) => (
          <SidebarRow
            title={content.title}
            Icon={content.icon}
            key={content.title}
            selected={content.selected}
          />
        ))}
      </div>
    );
  } else {
    sidebar = (
      <div className="sidebar">
        {sidebarContentTop.map((content) => (
          <SidebarRow
            title={content.title}
            Icon={content.icon}
            key={content.title}
            selected={content.selected}
          />
        ))}
        <hr />
        {sidebarContentBot.map((content) => (
          <SidebarRow
            title={content.title}
            Icon={content.icon}
            key={content.title}
          />
        ))}
        <hr />
      </div>
    );
  }

  return <React.Fragment>{sidebar}</React.Fragment>;
};

export default Sidebar;
