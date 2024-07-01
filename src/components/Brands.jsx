import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";


function Brands() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <></>, // Hide next button
    prevArrow: <></>, // Hide previous button
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel-container">
      <div>
        <Slider {...settings}>
        {data.map((d) => (
          <div  key={d.name} className="brand-carousel">
            <div className="brand-img">
               <img src={d.img} alt="brand"/>
            </div>
          </div>
              ))}
        </Slider>
        
      </div>
    </div>
  );
}

const data = [
  {
    img: '/Brands/philips.png',
  },
  {
   img: '/Brands/flos.png',
  },
  {
   img: '/Brands/tato.png',
  },
  {
   img: '/Brands/philips.png',
  },
];

export default Brands;
