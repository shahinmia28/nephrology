import { facts } from "../../../data";
import "./Facts.scss";

const Facts = () => {
  return (
    <div className="facts">
      <div className="container">
        <div className="facts-wrap">
          <div className="title text-center my-3">
            <div>
              <h1 className="p-3">Basic facts about kidney disease</h1>
              <p>
                Check out basic facts and symptoms about chronic kidney disease.
              </p>
            </div>
          </div>
          <div className="facts-list">
            <ul>
              {facts.map((d) => (
                <li key={d.id}>
                  <i className="fa-solid fa-circle-dot"></i>
                  <span> {d.disc} </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
{
  /* <i className="fa-solid fa-circle-notch"></i> */
}
