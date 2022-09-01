import { useState } from "react";
import { formData } from "../../data";
import Footer from "../home/footer/Footer";
import SlickCarousel from "../home/slick-carousel/SlickCarousel";
import "./Appointment.scss";

const Appointment = () => {
  const [condition, setCondition] = useState("new patient");
  const handleChecked = (e) => {
    e.target.checked ? setCondition(e.target.value) : setCondition("");
  };

  return (
    <div className="appointment">
      <div className="container">
        <div className="form-wrapper my-5">
          <form className="form">
            <div className="title text-center m-3">
              <h2>Appointment Form</h2>
            </div>
            {formData.map((d, i) => (
              <div className="m-2 item" key={i}>
                <label className="form-label">
                  {d.label} <span className="text-muted">{d.option}</span>
                </label>
                <input type={d.type} className="form-control" />
              </div>
            ))}

            <div className="condition m-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="new patient"
                  onChange={handleChecked}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  New Patient
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Former patient"
                  onChange={handleChecked}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Former Patient
                </label>
              </div>
            </div>

            <div className="button m-2">
              <input type="submit" value="Sent" className="btn btn-light" />
            </div>
          </form>
        </div>
      </div>

      <SlickCarousel />
      <Footer />
    </div>
  );
};

export default Appointment;
