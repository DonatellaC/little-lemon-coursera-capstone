import "./Header.css";
import logoHeader from "../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img src={logoHeader} alt="Little Lemon Logo" />
      </div>
    </>
  );
};

export default Header;
