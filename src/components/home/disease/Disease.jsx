import "./Disease.scss";
import { disease } from "../../../data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Info = () => {
  const [infoData, setInfoData] = useState([disease[0].title, disease[0].disc]);

  return (
    <div className="disease">
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
