import "./Features.css";
import f1 from "../../../../assets/cart.png";
import f2 from "../../../../assets/shipping.png";
import f3 from "../../../../assets/secure.png";
import f4 from "../../../../assets/relative.png";
import f5 from "../../../../assets/hacking.png";

const Features = () => {
  return (
    <div className="section">
      <h2
        data-aos="fade-up"
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
        Our Features
      </h2>
      <div
        style={{ padding: "30px" }}
        className="container d-flex justify-content-center align-items-center justify-content-lg-between  flex-column flex-lg-row "
      >
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          style={{ width: "180px", height: "190px" }}
          className="box rounded d-flex justify-content-center flex-column align-items-center"
        >
          <img src={f1} alt="" />
          <h6 className=" text-center">Shopping Cart</h6>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="box rounded d-flex justify-content-center flex-column align-items-center"
          style={{ width: "180px", height: "190px" }}
        >
          <img src={f2} alt="" />
          <h6 className=" text-center">Secure Payment option</h6>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="box rounded d-flex justify-content-center flex-column align-items-center"
          style={{ width: "180px", height: "190px" }}
        >
          <img src={f3} alt="" />
          <h6 className="text-center">Shopping Information</h6>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="box rounded d-flex justify-content-center flex-column align-items-center"
          style={{ width: "180px", height: "190px" }}
        >
          <img src={f4} alt="" />
          <h6 className=" text-center">Relative Products</h6>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="box rounded d-flex justify-content-center flex-column align-items-center"
          style={{ width: "180px", height: "190px" }}
        >
          <img src={f5} alt="" />
          <h6 className="text-center">Fraud Detection Integration</h6>
        </div>
      </div>
    </div>
  );
};

export default Features;
