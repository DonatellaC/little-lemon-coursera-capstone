import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>About Little Lemon</h2>
      <p>
        Little Lemon is a charming restaurant that offers a delightful culinary
        experience inspired by the vibrant flavors of Italy. Our mission is to
        create unforgettable moments for our guests through exceptional food,
        warm hospitality, and a welcoming ambiance.
      </p>
      <p>
        At Little Lemon, we believe in using the freshest ingredients to craft
        authentic Italian dishes that are bursting with flavor. Our talented
        chefs are passionate about their craft and strive to bring the essence
        of Italian cuisine to every plate.
      </p>
      <p>
        We would like to express our deepest gratitude to our valued customers
        for their continued support and loyalty. It is our pleasure to serve you
        and we look forward to welcoming you back to Little Lemon for many more
        delightful culinary adventures.
      </p>
      <div className="about-contact">
        <p className="about-phone">Phone: 123-456-7890</p>
        <span className="about-address">Address: 123 Main Street, City</span>
      </div>
    </div>
  );
};

export default AboutPage;
