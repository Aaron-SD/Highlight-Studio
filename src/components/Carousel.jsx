import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
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
            <div key={d.name} className="carousel">
              <div
                className="carousel-img-container"
                style={{
                  backgroundImage: `url(${d.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="category-content">
                  <span style={{fontSize:'1.5rem',fontWeight:'500'}}>{d.name}</span>
                  <button>Shop Now</button>
                </div>
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
    name:'Aesthetic',
    img: `/Category/aesthetic.png`,
  },
  {
    name:'Luxury',
    img: `/Category/luxury.png`,
  },
  {
    name:'Modern',
    img: `/Category/modern.png`,
  },
  {
    name:'Royal',
    img: `/Category/royal.png`,
  },
  {
    name:'Luxury',
    img: `/Category/luxury.png`,
  },
];

export default Carousel;
