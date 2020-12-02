import React, { useContext } from "react";
import "./RecommendedVideos.css";
import VideoCard from "../VideoCard/VideoCard";
import SidebarContext from "../../Context/sidebarContext";
import AmazonImage from "../../Images/amazon_homepage_ss.jpg";
import PortfolioImage from "../../Images/portfolio.jpg";

const aizazProfileUrl =
  "https://media-exp1.licdn.com/dms/image/C5603AQFUvYZXe3W0pw/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=jMowJgX8D2h7-nIU384UssgmqDAIZoIksyCE6FTGuWQ";

const data = [
  {
    thumbnail: PortfolioImage,
    channel: "Aizaz Hassan",
    channelImage: aizazProfileUrl,
    title: "Make your own portfolio page",
    views: "90M",
    timestamp: "5 hours ago",
    url: "https://cocky-leavitt-09d0d8.netlify.app/",
  },
  {
    thumbnail: AmazonImage,
    channel: "Aizaz Hassan",
    channelImage: aizazProfileUrl,
    title: "How to make Ecommerce website",
    views: "189k",
    timestamp: "1 month ago",
    url: "https://clone-ecommerce.web.app/",
  },
];

const RecommendedVideos = () => {
  const sidebarcontext = useContext(SidebarContext);
  const classes = ["recommendedVideos"];
  if (!sidebarcontext.sidebarOpen) {
    classes.push("min");
  }

  return (
    <div className={classes.join(" ")}>
      <h3>Recommended</h3>
      <div className="recommendedVideos__video">
        {Array(6)
          .fill()
          .map(() =>
            data.map((data) => (
              <VideoCard
                thumbnail={data.thumbnail}
                channel={data.channel}
                channelImage={data.channelImage}
                title={data.title}
                views={data.views}
                timestamp={data.timestamp}
                url={data.url}
              />
            ))
          )}
      </div>
    </div>
  );
};

export default RecommendedVideos;
