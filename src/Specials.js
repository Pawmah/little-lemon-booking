import bruchetta from "./bruchetta.jpg";
import greekSalad from "./greek salad.jpg";
import lemonDessert from "./lemon dessert.jpg";
import restaurantFood from "./restauranfood.jpg";

export default function Specials() {
  const specials = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese.",
      image: greekSalad,
    },
    {
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta,
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
    },
  ];

  return (
    <section className="specials-section" aria-label="On Click">
      <div className="container">
        <div className="specials-header">
          <h2>This Week’s Specials</h2>
          <a className="btn btn-primary" href="/order-online" aria-label="On Click">
            Online Menu
          </a>
        </div>

        <div className="specials-grid">
          {specials.map((item) => (
            <article className="special-card" key={item.title}>
              <img className="special-img" src={item.image} alt={item.title} />

              <div className="special-card-body">
                <div className="special-card-top">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>

                <p>{item.description}</p>
                <p className="order-link">Order a delivery 🚲</p>
              </div>
            </article>
          ))}
        </div>

        {/* Optional: This uses your 4th image so it isn’t unused */}
        <img
          src={restaurantFood}
          alt="Restaurant food"
          style={{ display: "none" }}
        />
      </div>
    </section>
  );
}
