import { CiCircleRemove } from "react-icons/ci";
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";
import { useState } from "react";
import "./Cart.css";
import { LuPlus, LuMinus } from "react-icons/lu";

export default function Cart() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [amount3, setAmount3] = useState(1);

  const handleIncrease1 = () => {
    setAmount1((prevAmount) => prevAmount + 1);
  };

  const handleDecrease1 = () => {
    if (amount1 > 1) {
      setAmount1((prevAmount) => prevAmount - 1);
    }
  };
  const handleIncrease2 = () => {
    setAmount2((prevAmount) => prevAmount + 1);
  };

  const handleDecrease2 = () => {
    if (amount2 > 1) {
      setAmount2((prevAmount) => prevAmount - 1);
    }
  };
  const handleIncrease3 = () => {
    setAmount3((prevAmount) => prevAmount + 1);
  };

  const handleDecrease3 = () => {
    if (amount3 > 1) {
      setAmount3((prevAmount) => prevAmount - 1);
    }
  };
  let SubTotal1 = (amount1 * 120.55).toFixed(2);
  let SubTotal2 = (amount2 * 66.0).toFixed(2);
  let SubTotal3 = (amount3 * 150.3).toFixed(2);
  let CartSubTotal =
    parseFloat(SubTotal1) + parseFloat(SubTotal2) + parseFloat(SubTotal3);
  return (
    <div>
      <div className="container">
        <table
          className="table container text-center justify-content-center"
          style={{ borderWidth: "2px", width: "100%", height: "100%" }}
        >
          <thead>
            <tr className="border" style={{ height: "2.75rem" }}>
              <th>Remove</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <CiCircleRemove
                  className="text-secondary"
                  style={{
                    marginBottom: "4%",
                    marginLeft: "-40%",
                    cursor: "pointer",
                  }}
                />
              </td>
              <td className="d-flex justify-content-center align-item-center">
                <img
                  className=" rounded shadow my-3"
                  style={{ width: "5rem", height: "6rem" }}
                  src={image1}
                  alt=""
                />
              </td>
              <td>Men&apos;s Fashion T-Shirt</td>
              <td>$120.55</td>
              <td>
                <button onClick={handleDecrease1}>
                  <LuMinus className="text-secondary" />
                </button>
                <span style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                  &nbsp;{amount1}&nbsp;
                </span>
                <button onClick={handleIncrease1}>
                  <LuPlus className="text-secondary" />
                </button>
              </td>
              <td>${SubTotal1}</td>
            </tr>
            <tr>
              <td>
                <CiCircleRemove
                  className="text-secondary"
                  style={{
                    marginBottom: "4%",
                    marginLeft: "-40%",
                    cursor: "pointer",
                  }}
                />
              </td>
              <td className="d-flex justify-content-center">
                <img
                  className=" rounded shadow my-3"
                  style={{ width: "5rem", height: "6rem" }}
                  src={image2}
                  alt=""
                />
              </td>
              <td>Men&apos;s Fashion T-Shirt</td>
              <td>$66.00</td>
              <td>
                <button onClick={handleDecrease2}>
                  <LuMinus className="text-secondary" />
                </button>
                <span style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                  &nbsp;{amount2}&nbsp;
                </span>
                <button onClick={handleIncrease2}>
                  <LuPlus className="text-secondary" />
                </button>
              </td>
              <td>${SubTotal2}</td>
            </tr>
            <tr>
              <td>
                <CiCircleRemove
                  className="text-secondary"
                  style={{
                    marginBottom: "4%",
                    marginLeft: "-40%",
                    cursor: "pointer",
                  }}
                />
              </td>
              <td className="d-flex justify-content-center">
                <img
                  className=" rounded shadow my-3"
                  style={{ width: "5rem", height: "6rem" }}
                  src={image3}
                  alt=""
                />
              </td>
              <td>Men&apos;s Fashion T-Shirt</td>
              <td>$150.30</td>
              <td>
                <button onClick={handleDecrease3}>
                  <LuMinus className="text-secondary" />
                </button>
                <span style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                  &nbsp;{amount3}&nbsp;
                </span>
                <button onClick={handleIncrease3}>
                  <LuPlus className="text-secondary" />
                </button>
              </td>
              <td>${SubTotal3}</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex flex-row">
          <div style={{ width: "60%" }}>
            <p className="font-weight-bold">Apply Coupon</p>
            <input
              type="search"
              name="Enter Your Coupon"
              id="Enter Your Coupon"
              placeholder="Enter Your Coupon"
              className="rounded"
              style={{ width: "auto" }}
            />
            <input
              type="button"
              className="text-white bg-primary rounded "
              value="Apply"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="mt-10 mx-8 container">
            <table className="table mx-0 ">
              <thead>
                <th className="float-left">Cart Totals</th>
              </thead>
              <tbody>
                <tr>
                  <th className="border-solid border-collapse border text-center">
                    Cart Subtotal
                  </th>
                  <td className="border">${CartSubTotal.toFixed(2)}</td>
                </tr>
                <tr className="border-y">
                  <th className="border-solid border-collapse border px-8 text-center">
                    Shipping
                  </th>
                  <td className="border">Free</td>
                </tr>
                <tr>
                  <th className="border-solid border-collapse border px-8 text-center">
                    Total
                  </th>
                  <td className="border">${CartSubTotal.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <input
              type="button"
              className=" rounded text-white bg-primary text-center font-weight-bold"
              style={{ cursor: "pointer" }}
              value="Proceed To Checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
