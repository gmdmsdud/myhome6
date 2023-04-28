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
          <SliderItem src="https://github.com/gmdmsdud/myhome5/blob/master/public/images/layout/react2.jpg?raw=true" />
          
        </div>
        <div>
          <SliderItem src="https://github.com/gmdmsdud/myhome5/blob/master/public/images/layout/dockerimage2.jpg?raw=true" />
        </div>
        <div>
          <SliderItem src="https://github.com/gmdmsdud/myhome5/blob/master/public/images/layout/typeimage.jpg?raw=true" />
        </div>
      </Slider>
    </Wrapper>
  );
}
