import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    const value = event.target.value;

    setSearch(value);

    if (value.trim() === "") {
      navigate("/products");
    } else {
      navigate(
        `/products?search=${encodeURIComponent(value)}`
      );
    }
  }

  return (
    <header className="header">
      <Link to="/" className="store-logo"> <h1>My Store</h1></Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/add-product">Add Product</Link>
      </nav>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
      />
    </header>
  );
}

export default Header;