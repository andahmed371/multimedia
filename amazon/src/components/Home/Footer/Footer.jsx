import "./Footer.css";
import payimg from "../../../assets/pay (1).png";
const Footer = () => {
  return (
    <footer>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        className="footer-container"
      >
        <div className="footer-top">
          <div className="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping and Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow us</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest-p"></i> Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-newsletter">
            <h3>Sign up for our newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Sign up</button>
            </form>
          </div>
          <div className="footer-contact">
            <h3>Contact us</h3>
            <p>
              Email:
              <a href="mailto:info@shoppingwebsite.com">
                info@shoppingwebsite.com
              </a>
            </p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-payment">
            <h3>Payment methods</h3>
            <img src={payimg} alt="Payment methods" />
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 Shopping Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
