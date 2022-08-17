import "./SlickCarousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slide } from "../../../data";
import { Link } from "react-router-dom";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider my-5" id="doctor">
      <div className="title text-center text-light mt-5">
        <h1>Doctors List</h1>
        <p>Find a doctor based on your symptoms to treat you</p>
      </div>

      <div className="slider-wrapper m-5">
        <Slider {...settings}>
          {slide.map((d, i) => (
            <div className="slide" key={i}>
              <div className="card">
                <div className="img-container">
                  <img src={d.img} alt="img" className="w-100 h-100" />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <h4>{d.name}</h4>
                    <span>{d.title}</span>
                  </div>
                  <p className="card-text">{d.disc}</p>
                  <div className="btn-container w-100">
                    <Link to="/appointment" className="btn btn-light">
                      Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlickCarousel;
