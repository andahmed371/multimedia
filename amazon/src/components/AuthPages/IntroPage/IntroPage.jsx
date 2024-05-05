import { NavLink } from "react-router-dom";
import Image from "../../../assets/download.png";

const IntroPage = () => {
  return (
    <div
      className=" container d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h2 className="font-weight-bold text-center my-3 mx-3">
          Welcome to my Website
        </h2>
        <h5 className="text-center my-3 mx-3">Let&apos;s Shopping</h5>
        <img className="h-50 w-50" src={Image} alt="" />
        <div className="text-center  py-4">
          <NavLink to={"/sign-up"}>
            <button className="btn btn-success mx-4">Sign Up</button>
          </NavLink>
          <NavLink to={"/sign-in"}>
            <button className="btn btn-primary mx-4">Log in</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
