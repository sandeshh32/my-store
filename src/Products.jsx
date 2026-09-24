import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  // Number of products per page
  const [limit, setLimit] = useState(30);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  // GET CATEGORIES
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category-list"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategories();
  }, []);

  // GET PRODUCTS
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        let url;

        // SEARCH
        if (search) {
          url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
            search
          )}`;
        }

        // CATEGORY
        else if (category) {
          url = `https://dummyjson.com/products/category/${category}`;
        }

        // NORMAL PRODUCTS
        else {
          const skip = (page - 1) * limit;

          url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
        setTotal(data.total);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [page, search, category, limit]);

  const totalPages = Math.ceil(total / limit);

  return (
    <main className="main-content">

      {/* HEADER */}
      <div className="products-header">

        <h1>
          {search
            ? `Search results for "${search}"`
            : category
            ? category
            : "Products"}
        </h1>

        <div className="product-controls">

          {/* CATEGORY SELECT */}
          {!search && (
            <select
              value={category}
              onChange={(event) => {
                const selectedCategory = event.target.value;

                setPage(1);

                if (selectedCategory === "") {
                  setSearchParams({});
                } else {
                  setSearchParams({
                    category: selectedCategory,
                  });
                }
              }}
            >
              <option value="">All</option>

              {categories.map((categoryName) => (
                <option
                  key={categoryName}
                  value={categoryName}
                >
                  {categoryName}
                </option>
              ))}
            </select>
          )}

          {/* ITEMS PER PAGE */}
          {!search && (
            <select
              value={limit}
              onChange={(event) => {
                setLimit(Number(event.target.value));
                setPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          )}

        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="status-message">
          Loading products...
        </p>
      )}

      {/* ERROR */}
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {/* PRODUCTS */}
      {!loading && !error && (
        <>
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="product-grid">

              {products.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  className="product-card"
                  key={product.id}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                  />

                  <h2>{product.title}</h2>

                  <p className="price">
                    ${product.price}
                  </p>
                </Link>
              ))}

            </div>
          )}

          {/* PAGINATION */}
          {!search && !category && (
            <div className="pagination">

              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>

              <span>
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>

            </div>
          )}
        </>
      )}

    </main>
  );
}

export default Products;