import PropTypes from "prop-types";
import "./MenuItem.css";

const MenuItem = ({ name, ingredients, price }) => {
  return (
    <li className="menu-item">
      <h3 className="menu-item__name">{name}</h3>
      <p className="menu-item__ingredients">{ingredients}</p>
      <p className="menu-item__price">€ {price}</p>
    </li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default MenuItem;
