import image1 from "../../../assets/onepiece.jpeg";
import image2 from "../../../assets/twopiece.jpeg";
import image3 from "../../../assets/three.jpeg";
import image4 from "../../../assets/four.jpeg";
import image5 from "../../../assets/five.jpeg";
import image6 from "../../../assets/six.jpeg";
import image7 from "../../../assets/seven.jpeg";
import image8 from "../../../assets/eight.jpeg";
const Shop = () => {
  return (
    <div>
      <h1 data-aos="zoom-out" data-aos-delay="400" className="text-center">
        Shop
      </h1>
      <p data-aos="zoom-in" data-aos-delay="400" className="text-center">
        Welcome to our shop where you can buy all your favorite products!
      </p>
      <div
        className="container d-flex flex-wrap justify-content-between Regular shadow"
        style={{ marginBottom: "20px" }}
      >
        <div
          data-aos="flip-left"
          data-aos-delay="400"
          className="card"
          style={{ width: "20rem" }}
        >
          <img
            src={image1}
            className="card-img-top"
            alt="..."
            style={{ width: "320px", height: "320px" }}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <strong>120$</strong>
            <button type="button" className="btn btn-primary px-3 mx-3">
              Buy Now
            </button>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-delay="400"
          className="card"
          style={{ width: "20rem" }}
        >
          <img
            src={image2}
            className="card-img-top"
            alt="..."
            style={{ width: "320px", height: "320px" }}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <strong>120$</strong>
            <button type="button" className="btn btn-primary px-3 mx-3">
              Buy Now
            </button>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="400"
          className="card"
          style={{ width: "20rem" }}
        >
          <img
            src={image8}
            className="card-img-top"
            alt="..."
            style={{ width: "320px", height: "320px" }}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <strong>120$</strong>
            <button type="button" className="btn btn-primary px-3 mx-3">
              Buy Now
            </button>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-delay="400"
          className="card"
          style={{ width: "20rem" }}
        >
          <img
            src={image3}
            className="card-img-top"
            alt="..."
            style={{ width: "320px", height: "320px" }}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <strong>120$</strong>
            <button type="button" className="btn btn-primary px-3 mx-3">
              Buy Now
            </button>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="400"
          className="card"
          style={{ width: "20rem" }}
        >
          <img
            src={image4}
            className="card-img-top"
            alt="..."
            style={{ width: "320px", height: "320px" }}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <strong>120$</strong>
            <button type="button" className="btn btn-primary px-3 mx-3">
              Buy Now
            </button>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-delay="400"
          className="card"
          style={{ width: "20rem" }}
        >
          <img
            src={image5}
            className="card-img-top"
            alt="..."
            style={{ width: "320px", height: "320px" }}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <strong>120$</strong>
            <button type="button" className="btn btn-primary px-3 mx-3">
              Buy Now
            </button>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="400"
          className="card"
          style={{ width: "20rem" }}
        >
          <img
            src={image6}
            className="card-img-top"
            alt="..."
            style={{ width: "320px", height: "320px" }}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <strong>120$</strong>
            <button type="button" className="btn btn-primary px-3 mx-3">
              Buy Now
            </button>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-delay="400"
          className="card"
          style={{ width: "20rem" }}
        >
          <img
            src={image7}
            className="card-img-top"
            alt="..."
            style={{ width: "320px", height: "320px" }}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <strong>120$</strong>
            <button type="button" className="btn btn-primary px-3 mx-3">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
