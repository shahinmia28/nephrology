import "./Disease.scss";
import { disease } from "../../../data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Info = () => {
  const [infoData, setInfoData] = useState([disease[0].title, disease[0].disc]);

  return (
    <div className="disease">
      <div className="title-container">
        <div className="title">
          <div className="title-text">
            <h1 className="p-2 p-md-4 text-center">Types of kidney diseases</h1>
            <p>
              Your kidneys are vital organs that filter fluid and waste out of
              your blood, and you cannot live without them. Diseases that lower
              your kidney's ability to clean your blood can affect only the
              kidneys, or harm other parts of your body too. These health
              conditions can cause chronic kidney disease or kidney failure.
            </p>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#009760"
            fillOpacity="1"
            d="M0,224L24,197.3C48,171,96,117,144,117.3C192,117,240,171,288,170.7C336,171,384,117,432,85.3C480,53,528,43,576,74.7C624,107,672,181,720,197.3C768,213,816,171,864,133.3C912,96,960,64,1008,96C1056,128,1104,224,1152,240C1200,256,1248,192,1296,165.3C1344,139,1392,149,1416,154.7L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container my-4">
        <div className="disease-box p-2 m-0 row">
          <ul className="disease-list col-12 col-lg-3 p-0 px-lg-2 my-3 my-lg-0 list-group">
            {disease.map((d) => (
              <li
                className="list-group-item"
                key={d.id}
                onClick={() => setInfoData([d.title, d.disc])}
              >
                {d.title}
              </li>
            ))}
          </ul>
          <div className="disease-info col-12 col-lg-9 my-3 my-lg-0">
            <h3>{infoData[0]}</h3>
            <p>{infoData[1]}</p>
            <div className="button-group py-2">
              <Link to="/help" className="btn btn-light">
                More info
              </Link>
              <a href="#doctor" className="btn btn-light mx-3">
                See a doctor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
