import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO MY STORE</p>

          <h1>Find Products You Love</h1>

          <p>
            Explore our collection of products,
            browse different pages, and discover
            something that fits your needs.
          </p>

          <Link
            to="/Products"
            className="browse-button"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Browse With Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Wide Selection</h3>
            <p>
              Browse a large collection of
              products in different categories.
            </p>
          </div>

          <div className="feature-card">
            <h3>Easy Search</h3>
            <p>
              Quickly find products using our
              product search feature.
            </p>
          </div>

          <div className="feature-card">
            <h3>Product Details</h3>
            <p>
              Click a product to view its
              complete information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;