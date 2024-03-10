import "../footar/footar.css";
import Link from "react-router-dom";
import footar_log from "../imgs/logo.png";
import fb from "../imgs/fb.png";
import insta from "../imgs/inst.png";
import wp from "../imgs/wp.png";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer-log">
        <img src={footar_log} alt="" />
        <p>Shop.com</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-contaiber">
          <img src={insta} alt="" />
        </div>
        <div className="footer-icon-contaiber">
          <img src={fb} alt="" />
        </div>
        <div className="footer-icon-contaiber">
          <img src={wp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023- all right reserved</p>
      </div>
    </div>
  );
};
export default footer;
