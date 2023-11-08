import { Carousel } from "antd";
import CarouselImgOne from "@assets/images/carousel-image-one.png";
import CarouselImgTwo from "@assets/images/carousel-image-two.png";

import style from "./style.module.scss";

const MainSlider = () => {
 

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className={style.mainSlider}>
      <Carousel className={style.carouselImage} afterChange={onChange}>
        <div className={style.imgContainer}>
          <img className={style.imgClass} src={CarouselImgOne} />
        </div>
        <div className={style.imgContainer}>
          <img className={style.imgClass} src={CarouselImgTwo} />
        </div>
       
      </Carousel>
    </div>
  );
};

export default MainSlider;
