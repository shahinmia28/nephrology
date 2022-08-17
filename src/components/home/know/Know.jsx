import { know } from "../../../data";
import "./Know.scss";
import { Link } from "react-router-dom";

const Know = () => {
  return (
    <div className="know">
      <div className="container">
        <div className="title">
          <h1>Everything you need to know</h1>
          <p className="text-muted">
            Nephrology USA assists Nephrology Practices looking for Associates
            and Nephrologists and Nephrology Fellows seeking Nephrology
            positions.
          </p>
        </div>

        <div className="row card-wrapper">
          {know.map((d, i) => (
            <div className="col-12 col-md-4 single " key={i}>
              <div className="card-info">
                <div className="card-img">
                  <img src={d.img} alt="img" />
                </div>
                <div className="card-text">
                  <Link to="/about">
                    <h3>{d.title}</h3>
                  </Link>
                  <span className="text-muted">{d.disc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Know;
