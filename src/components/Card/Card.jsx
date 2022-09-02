import React, { Fragment } from "react";
import "./Card.css";
export default function Card() {
  return (
    <Fragment>
      {" "}
      <div class="card">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTT0o9g-sw8S3l7I2QH2BrfsHKEPgU3lxbFmY21zo4&s"
          alt=""
        />
        <div class="card-details">
          <h3>t-shirt</h3>
          <p>this is t-hirt</p>
          <p>
            price:<span>$100</span>
          </p>
          <div class="rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
