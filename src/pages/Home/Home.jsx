import "./Home.css";
import promo1 from "../../assets/images/promo1.png";
import promo2 from "../../assets/images/promo2.png";
import promo3 from "../../assets/images/promo3.png";

const Home = () => {
  return (
    <main>
      <section className="promo-banner">
        <article className="promo-banner-content">
          <h1>Welcome to Little Lemon Restaurant!</h1>
          <p>
            Indulge in a delightful dining experience with us. Enjoy our
            carefully crafted menu, featuring a blend of culinary traditions and
            innovative creations. Our team of talented chefs and friendly staff
            are dedicated to providing you with an unforgettable gastronomic
            journey.
          </p>
        </article>
      </section>
      <section className="promo-columns">
        <article className="promo-column">
          <div
            className="promo-image"
            style={{ backgroundImage: `url(${promo1})` }}
          ></div>
          <h2>Special Offer</h2>
          <p>
            Do not miss our special offer of the month! Experience the perfect
            harmony of flavors with our exclusive dish, prepared with fresh and
            locally sourced ingredients. Treat yourself to a culinary delight
            that will leave you craving for more.
          </p>
        </article>
        <article className="promo-column">
          <div
            className="promo-image"
            style={{ backgroundImage: `url(${promo2})` }}
          ></div>
          <h2>New Item</h2>
          <p>
            Discover our latest addition to the menu - a culinary masterpiece
            that combines unique flavors and textures. Our expert chefs have
            carefully crafted this dish to bring you a one-of-a-kind dining
            experience. Be among the first to taste this extraordinary creation.
          </p>
        </article>
        <article className="promo-column">
          <div
            className="promo-image"
            style={{ backgroundImage: `url(${promo3})` }}
          ></div>
          <h2>Customer Favorite</h2>
          <p>
            Our customer favorite has won the hearts of many. Indulge in the
            dish that has become a beloved staple among our loyal patrons. With
            its perfect blend of flavors and exquisite presentation, it is no
            wonder why this item has become a timeless classic at Little Lemon
            Restaurant.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;
