import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="https://gmdmsdud.github.io/myhome5/react2.JPG" />
          
        </div>
        <div>
          <SliderItem src="./images/layout/dockerimage2.JPG" />
        </div>
        <div>
          <SliderItem src="./images/layout/typeimage.JPG" />
        </div>
      </Slider>
    </Wrapper>
  );
}
