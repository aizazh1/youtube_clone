import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={props.toggleSidebar}>
          <MenuIcon />
        </IconButton>

        <img
          className="header__ytlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
          alt="Youtube Logo"
        />
      </div>
      <div className="header__mid">
        <input type="text" placeholder="Search" />
        <div className="header__searchIconContainer">
          <SearchIcon className="header__searchIcon" fontSize="small" />
        </div>
      </div>
      <div className="header__right">
        <IconButton className="header__righticons">
          <VideoCallIcon />
        </IconButton>
        <IconButton className="header__righticons">
          <AppsIcon />
        </IconButton>
        <IconButton className="header__righticons">
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar className="header__avatar">A</Avatar>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
