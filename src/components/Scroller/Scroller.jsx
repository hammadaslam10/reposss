import React from "react";
import "./Scroller.css"
export default function Scroller() {
  return (
    <div className="news">
     
      <strong className={"news__count " + (data.length > 0 ? "" : "none")}>
        Total cards: {data.length}
      </strong>
    </div>
  );
}
