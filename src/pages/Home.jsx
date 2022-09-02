import React, { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Carousel/Carousel";
import Heading from "../components/Heading/Heading";
import { Navbar } from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Subscribe from "../components/Subscribe/Subscribe";
import BackToTop from "../components/TopButton/BackToTop";
// Import Swiper React components

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <Heading name="Featured Products" />
      <Slider />
      <Banner />
      <Heading name="New Arrival" />
      <Slider />
      <Subscribe />
      <BackToTop />
    </Fragment>
  );
}
