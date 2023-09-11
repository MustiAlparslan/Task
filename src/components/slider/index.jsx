import React from "react"
import Slider from "react-slick";

export function SliderHero(){
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return(
        <Slider {...settings}>
        <div>
          <img className="w-full h-50 md:h-96" src="https://i.ebayimg.com/images/g/L2YAAOSw2Rhk70tv/s-l960.webp" alt="Fake 1" />
        </div>
        <div>
          <img className="w-full h-50 md:h-96" src="https://i.ebayimg.com/images/g/oIYAAOSwfadjSCqL/s-l960.webp" alt="Fake 3" />
        </div>
        
      </Slider>
    )
}