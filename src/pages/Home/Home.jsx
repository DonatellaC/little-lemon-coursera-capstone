import "./Home.css";
import promo1 from "../../assets/images/promo1.png";
import promo2 from "../../assets/images/promo2.png";
import promo3 from "../../assets/images/promo3.png";

const Home = () => {
  return (
    <main>
      <section className="promo-banner">
        <article className="promo-banner-content">
          <h1>Get 20% Off Your First Order!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus fermentum orci, nec condimentum justo rhoncus non. Ut
            elementum nibh non enim dapibus, non hendrerit elit congue. Donec
            vel hendrerit nunc.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus fermentum orci, nec condimentum justo rhoncus non. Ut
            elementum nibh non enim dapibus, non hendrerit elit congue. Donec
            vel hendrerit nunc.
          </p>
        </article>
        <article className="promo-column">
          <div
            className="promo-image"
            style={{ backgroundImage: `url(${promo2})` }}
          ></div>
          <h2>New Item</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus fermentum orci, nec condimentum justo rhoncus non. Ut
            elementum nibh non enim dapibus, non hendrerit elit congue. Donec
            vel hendrerit nunc.
          </p>
        </article>
        <article className="promo-column">
          <div
            className="promo-image"
            style={{ backgroundImage: `url(${promo3})` }}
          ></div>
          <h2>Customer Favorite</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus fermentum orci, nec condimentum justo rhoncus non. Ut
            elementum nibh non enim dapibus, non hendrerit elit congue. Donec
            vel hendrerit nunc.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;
