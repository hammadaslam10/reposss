import React from "react";
import { Link } from "react-router-dom";
import "./Slide.css";

const Slide = (props) => {
  const { title, subtitle, link, img, btntext, img2 } = props.slide;
  const { className } = props;

  return (
    <div className={className}>
      {img2 && (
        <div className="img2">
          <img src={img2} alt="" />
        </div>
      )}
      <div className="slidecont">
        <div className="slidetitles">
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
        </div>
        <button className="custom-btn btn-9">Explore</button>
        {/* <Link to={"/website/" + link}>
          <Appbtn text={btntext} icon="fal fa-chevron-right" />
        </Link> */}
      </div>
      <img src={img} alt="" />
    </div>
  );
};
export default Slide;
