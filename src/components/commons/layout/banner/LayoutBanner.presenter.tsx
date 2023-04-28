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
          <SliderItem src="../public/react2.JPG" />
          
        </div>
        <div>
          <SliderItem src="../public/dockerimage2.JPG" />
        </div>
        <div>
          <SliderItem src="../public/typeimage.JPG" />
        </div>
      </Slider>
    </Wrapper>
  );
}
