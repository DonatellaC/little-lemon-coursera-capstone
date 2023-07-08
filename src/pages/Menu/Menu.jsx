import MenuItem from "../../components/MenuItem/MenuItem";
import "./Menu.css";

const menuItems = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Bruschetta",
        ingredients: "Toasted Bread, Tomatoes, Garlic, Basil, Olive Oil",
        price: "6.99",
      },
      {
        name: "Caprese Salad",
        ingredients: "Tomatoes, Mozzarella Cheese, Basil, Olive Oil",
        price: "7.99",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Spaghetti Carbonara",
        ingredients: "Spaghetti, Pancetta, Eggs, Parmesan Cheese, Black Pepper",
        price: "8.99",
      },
      {
        name: "Margherita Pizza",
        ingredients: "Tomato Sauce, Mozzarella Cheese, Basil",
        price: "9.99",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Panna Cotta",
        ingredients: "Cream, Sugar, Vanilla, Gelatin",
        price: "5.99",
      },
      {
        name: "Tiramisu",
        ingredients: "Ladyfingers, Mascarpone Cheese, Coffee, Cocoa Powder",
        price: "6.99",
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        name: "Espresso",
        ingredients: "Finely Ground Coffee, Hot Water",
        price: "2.99",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu-page">
      <h2 className="menu-heading">Our Menu</h2>
      <div className="menu-container">
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h3 className="category-heading">{category.category}</h3>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  name={item.name}
                  ingredients={item.ingredients}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
