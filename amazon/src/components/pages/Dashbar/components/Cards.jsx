import { FaUser } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
const Cards = () => {
  return (
    <div>
      <h1
        data-aos="fade-down"
        data-aos-delay="400"
        className="text-center fw-bold"
      >
        Dash bar
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="800"
        className="text-center text-md mt-3 mb-5"
      >
        Add Employee Details and Records
      </p>
      <div className="container">
        <div className="d-flex col justify-content-around gx-5 gy-5">
          <div
            className="border px-3 py-2 Regular shadow rounded"
            style={{ width: "180px", color: "#fff", backgroundColor: "green" }}
          >
            <FaUser size={60} />
            <p>Users</p>
            <span style={{ fontSize: "20px" }}>134</span>
          </div>
          <div
            className="border px-3 py-2 Regular shadow rounded"
            style={{ width: "180px", color: "#fff", backgroundColor: "red" }}
          >
            <CgMenuLeftAlt size={60} />
            <p>Posts</p>
            <span style={{ fontSize: "20px" }}>87</span>
          </div>
          <div
            className="border px-3 py-2 Regular shadow rounded"
            style={{
              width: "180px",
              color: "#fff",
              backgroundColor: "skyblue",
            }}
          >
            <IoLogoTwitter size={60} />
            <p>Tweets</p>
            <span style={{ fontSize: "20px" }}>125</span>
          </div>
          <div
            className="border px-3 py-2 Regular shadow rounded"
            style={{ width: "180px", color: "#fff", backgroundColor: "orange" }}
          >
            <FaShare size={60} />
            <p>Shares</p>
            <span style={{ fontSize: "20px" }}>36</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
