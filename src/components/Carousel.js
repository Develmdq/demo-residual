import { Carousel } from "react-responsive-carousel";
import Day1 from '../assets/showDate/14-10-19.jpg'
import Day2 from '../assets/showDate/30-12-19.jpg'
import Day3 from '../assets/showDate/17-01-20.jpg'
import Day4 from '../assets/showDate/12-04-20.jpg'

 const ImgCarousel=() => (
  <Carousel
    autoPlay
    showThumbs={false}
    showStatus={false}
    infiniteLoop={true}
    width="90%"
  >
    <div>
      <img src={Day1} alt="Fecha en vivo" />
    </div>
    <div>
      <img src={Day2} alt="Fecha en vivo" />
    </div>
    <div>
      <img src={Day3} alt="Fecha en vivo" />
    </div>
    <div>
      <img src={Day4} alt="Fecha en vivo" />
    </div>
  </Carousel>
);

export default ImgCarousel;
