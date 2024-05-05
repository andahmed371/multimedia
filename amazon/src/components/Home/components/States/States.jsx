import { IoPersonSharp } from "react-icons/io5";
import { BiBuilding } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import "./States.css";

const States = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        minHeight: "300px",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
      }}
      className="stats position-relative"
    >
      <h2
        data-aos="fade-down"
        data-aos-delay="400"
        style={{
          fontSize: "40px",
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "50px",
          marginTop: "0",
        }}
        className="fw-bold position-relative"
      >
        Our States
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        style={{ gap: "2rem" }}
        className="container position-relative d-flex justify-content-lg-around text-center flex-column flex-lg-row justify-content-start"
      >
        <div
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "30px",
            paddingBottom: "30px",
            opacity: "0.8",
            transitionDuration: "300ms",
            width: "300px",
          }}
          className="box container d-flex flex-column justify-content-center align-items-center bg-white text-center position-relative"
        >
          <i style={{ fontSize: "3rem", lineHeight: "1" }}>
            {<IoPersonSharp />}
          </i>
          <span style={{ fontSize: "50px" }} className="d-block fw-bold my-3">
            10,000
          </span>
          <span
            style={{ color: "#3b4356", fontSize: "20px" }}
            className="fst-italic fw-bold "
          >
            Clients
          </span>
        </div>
        <div
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "30px",
            paddingBottom: "30px",
            opacity: "0.8",
            transitionDuration: "300ms",
            width: "300px",
          }}
          className="box container d-flex flex-column justify-content-center align-items-center bg-white text-center position-relative"
        >
          <i style={{ fontSize: "3rem", lineHeight: "1" }}>{<BiBuilding />}</i>
          <span style={{ fontSize: "50px" }} className="d-block fw-bold my-3">
            50
          </span>
          <span
            style={{ color: "#3b4356", fontSize: "20px" }}
            className="fst-italic fw-bold"
          >
            Branch
          </span>
        </div>
        <div
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "30px",
            paddingBottom: "30px",
            opacity: "0.8",
            transitionDuration: "300ms",
            width: "300px",
          }}
          className="box  container d-flex flex-column justify-content-center align-items-center bg-white text-center position-relative"
        >
          <i style={{ fontSize: "3rem", lineHeight: "1" }}>{<FaCity />}</i>
          <span style={{ fontSize: "50px" }} className="d-block fw-bold my-3">
            25
          </span>
          <span
            style={{ color: "#3b4356", fontSize: "20px" }}
            className="fst-italic fw-bold"
          >
            Town
          </span>
        </div>
        <div
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "30px",
            paddingBottom: "30px",
            opacity: "0.8",
            transitionDuration: "300ms",
            width: "300px",
          }}
          className="box container d-flex flex-column justify-content-center align-items-center bg-white text-center position-relative"
        >
          <i style={{ fontSize: "3rem", lineHeight: "1" }}>
            {<MdOutlineAttachMoney />}
          </i>
          <span style={{ fontSize: "50px" }} className="d-block fw-bold my-3">
            100,000
          </span>
          <span
            style={{ color: "#3b4356", fontSize: "20px" }}
            className="fst-italic fw-bold"
          >
            Sales
          </span>
        </div>
      </div>
    </div>
  );
};

export default States;
