
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <main className="main-content">
        <p>Loading product...</p>
      </main>
    );
  }

  // Error
  if (error) {
    return (
      <main className="main-content">
        <p>{error}</p>

        <Link to="/products">
          Back to Products
        </Link>
      </main>
    );
  }

  // Product details
  return (
    <main className="main-content">
      <Link to="/products">
        ← Back to Products
      </Link>

      <div className="product-details">
        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <div>
          <h1>{product.title}</h1>

          <p className="price">
            ${product.price}
          </p>

          <h2>Description</h2>

          <p>{product.description}</p>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {product.rating}
          </p>

          <p>
            <strong>Stock:</strong>{" "}
            {product.stock}
          </p>

          <button
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;

