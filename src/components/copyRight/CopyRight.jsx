import "./CopyRight.scss";
import { iconData } from "../../data";

const CopyWrite = () => {
  return (
    <div className="copyRight">
      <div className="row">
        <div className="col-12 col-md-6 text-center text-md-start copy">
          <span> &copy; All right are reserved by NephrologyBD.</span>
        </div>
        <div className="col-12 col-md-6 social m-auto">
          <ul className="d-flex justify-content-center justify-content-md-end  align-items-center">
            {iconData.map((d, i) => (
              <li className="icon-box" key={i}>
                <a
                  href="#"
                  className="icon-link d-flex text-decoration-none justify-content-center align-items-center"
                >
                  <i className={d.name}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CopyWrite;
