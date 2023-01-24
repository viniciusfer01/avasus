import { AspectRatio, Box } from "@chakra-ui/react";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import Image1 from "../public/slide1.jpg";
import Image2 from "../public/slide8.png";
import styles from "./SimpleSlider.module.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.slider}>
        <Slider {...settings}>
          <div className={styles.slidee}>
            <Image src={Image1} alt="Avasus | Conhecimento aberto em saúde" />
          </div>
          <div className={styles.slidee}>
            <Image src={Image2} alt="Avasus | Conhecimento aberto em saúde" />
          </div>
        </Slider>
      </div>
    );
  }
}
