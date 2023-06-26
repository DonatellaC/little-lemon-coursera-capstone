import "./Footer.css";
import logo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon Logo Small" />
      </div>
      <div className="copywriting-info">
        <p>2023 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
