import "./Intro.scss";
import Typewriter from "typewriter-effect";
import { homeMenu } from "../../../data";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div className="intro">
      <div className="info text-center p-3">
        <h2>Best Nephrologist Here</h2>
        <h3 className="text-light p-3">
          <Typewriter
            options={{
              strings: ["Dialysis", "Transplant", "Stone Remove"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        {/* <Link to="/services">Click for Details</Link> */}
      </div>

      <div className="menu-bar">
        <ul className="items">
          {homeMenu.map((d, i) => (
            <li key={i}>
              <Link to={"/" + d.id}>{d.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Intro;
