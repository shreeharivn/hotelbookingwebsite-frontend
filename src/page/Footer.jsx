import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-between">
          {/* Column 1: About Us */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p className="about">
              Magnum is a brand known for boutique hotels, with each one
              having its own unique personality. The main Magnum website does a
              great job of highlighting the uniqueness of each property while
              staying true to the brand.
            </p>
          </div>

          {/* Column 2: Social Links */}
          <div className="col-md-4 text-center">
            <h5 className="ml-[-40px]">Social Links</h5>
            <ul className="social-links list-unstyled">
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f ml-[-10px]"></i>
                </a>
                Facebook
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter ml-[-35px]"></i>
                </a>
                Twitter
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                Instagram
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <i className="fas fa-map-marker-alt "></i> 21st main golf street,calvin road Newjerssy London USA
            </p>
            <p>
              <i className="fas fa-phone "></i> (123) 456-7890908
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:info@example.com">Magnum@123.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
