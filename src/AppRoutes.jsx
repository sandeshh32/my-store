
import { Routes, Route } from "react-router-dom";
import Products from "./Products.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Contact from "./Contact.jsx";
import Help from "./Help.jsx";
import AddProduct from "./AddProduct.jsx";
import Cart from "./Cart.jsx";
function AppRoutes({ cart, setCart }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/products/:id"
        element={
          <ProductDetails
            cart={cart}
            setCart={setCart}
          />
        }
      />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/help" element={<Help />} />

      <Route path="/add-product" element={<AddProduct />} />
     <Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      setCart={setCart}
    />
  }
/>
    </Routes>
  );
}

export default AppRoutes;

