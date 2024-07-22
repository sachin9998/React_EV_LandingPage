import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import video1 from "../../assets/video1.mp4";
import "./Background.css";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="background image 1" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="background image 2" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="background image 3" />;
  }
  return null; // In case heroCount is not 0, 1, or 2
};

export default Background;
