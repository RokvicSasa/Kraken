import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
// Components
import ItemBox from '../Elements/ItemBox';

const SliderWrapper = () => {
  const games = useSelector((state) => state.games.games);

  let settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {games ? games.map((game) => (
        <ItemBox game={game} key={game.id}/>
      )) : null}
    </Slider>
  );
}

export default SliderWrapper

