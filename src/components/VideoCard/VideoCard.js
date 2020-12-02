import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
import SidebarContext from "../../Context/sidebarContext";

const VideoCard = (props) => {
  const sidebarContext = useContext(SidebarContext);
  const classes = ["videoCard"];
  if (!sidebarContext.sidebarOpen) {
    classes.push("min");
  }

  return (
    <div className={classes.join(" ")}>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        <img
          src={props.thumbnail}
          alt="Thumbnail"
          className="videoCard__thumbnail"
        />
      </a>
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={props.channel}
          src={props.channelImage}
        />
        <div className="videoCard__text">
          <h4>{props.title}</h4>
          <p>{props.channel}</p>
          <p>
            {props.views} views
            <span className="videoCard__dot">.</span>
            {props.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
